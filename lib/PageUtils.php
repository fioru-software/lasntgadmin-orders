<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{ PluginUtils, OrderData };
use Lasntg\Admin\Group\GroupApi;
use Lasntg\Admin\Products\ProductApi;
use Lasntg\Admin\Attendees\{ AttendeeActionsFilters, AttendeeUtils };

use Groups_Access_Meta_Boxes;

use Automattic\WooCommerce\Utilities\OrderUtil;
use Automattic\WooCommerce\Admin\Overrides\Order;
use Automattic\WooCommerce\Internal\Admin\Loader;

use WP_Post, WC_Order;

class PageUtils {

	/**
	 * Add WordPress and WooCommerce actions.
	 */
	public static function add_actions(): void {

		/**
		 * Custom add order page for admin site
		 */
		add_action( 'add_meta_boxes', [ self::class, 'remove_metaboxes' ], 40, 2 );
		add_action( 'add_meta_boxes', [ self::class, 'add_metaboxes' ], 50, 2 );
		add_action( 'admin_init', [ self::class, 'remove_title' ] );

		/**
		 * Enqueue admin order component
		 */
		add_action( 'admin_enqueue_scripts', [ self::class, 'enqueue_components' ] );
	}

	public static function add_filters() {
		add_filter( 'wc_order_is_editable', [ self::class, 'is_order_editable' ], 10, 2 );
	}

	public static function is_order_editable( bool $is_editable, WC_Order $order ) {
		return in_array( $order->get_status(), array( 'pending', 'on-hold', 'auto-draft', 'attendees', 'waiting-list' ), true );
	}

	/**
	 * Remove default WooCommerce metaboxes on new order page.
	 *
	 * @see woocommerce/src/Internal/Admin/Orders/Edit.php:42
	 * @see https://developer.wordpress.org/reference/hooks/add_meta_boxes/
	 * @see https://developer.wordpress.org/reference/functions/add_meta_box/
	 * @see https://developer.wordpress.org/reference/functions/remove_meta_box/
	 */
	public static function remove_metaboxes( string $screen_id, WP_Post $post ): void {
		if ( 'shop_order' === $screen_id ) {
			remove_meta_box( 'woocommerce-order-data', $screen_id, 'normal' );
			remove_meta_box( 'woocommerce-order-items', $screen_id, 'normal' );
			remove_meta_box( 'woocommerce-order-downloads', $screen_id, 'normal' );
			remove_meta_box( 'woocommerce-order-actions', $screen_id, 'side' );
			remove_meta_box( 'woocommerce-order-notes', $screen_id, 'side' );
			remove_meta_box( 'groups-permissions', $screen_id, 'side', 'high' );
		}
	}

	/**
	 * Adds html root element for order component
	 *
	 * @see https://developer.wordpress.org/reference/functions/add_meta_box/
	 */
	public static function add_metaboxes( string $screen_id, WP_Post $post ): void {
		if ( 'shop_order' === $screen_id ) {
			$order = wc_get_order( $post->ID );
			add_meta_box(
				'woocommerce-order-data',
				sprintf( 'Order #%d', $order->get_order_number() ),
				[ self::class, 'output_admin_order_markup' ],
				$screen_id,
				'advanced',
				'high'
			);
		}
	}

	public static function output_admin_order_markup( WP_Post $post ): void {
		echo '<div class="wrap woocommerce">';
		$tab = isset( $_GET['tab'] ) ? wp_kses( wp_unslash( $_GET['tab'] ), 'post' ) : 'order';
		echo wp_kses( self::order_menu( $post, $tab ), 'post' );

		switch ( $tab ) {
			case 'attendees':
				echo wp_kses( self::attendees( $post ), 'post' );
				break;

			case 'payment':
				echo wp_kses( self::payment( $post ), 'post' );
				break;

			default:
				echo wp_kses( self::order_form( $post ), 'post' );
		}

		echo '</div>';
	}

	public static function order_menu( WP_Post $post, string $tab ): string {
		$markup  = "<nav class='nav-tab-wrapper woo-nav-tab-wrapper'>";
		$markup .= "<a href='/wp-admin/post.php?post=$post->ID&action=edit&tab=order' class='nav-tab" . self::get_class_attribute( $tab, 'order' ) . "'>Order</a>";
		$markup .= "<a href='/wp-admin/post.php?post=$post->ID&action=edit&tab=attendees' class='nav-tab" . self::get_class_attribute( $tab, 'attendees' ) . "'>Attendees</a>";
		$markup .= "<a href='/wp-admin/post.php?post=$post->ID&action=edit&tab=payment' class='nav-tab" . self::get_class_attribute( $tab, 'payment' ) . "'>Payment</a>";
		$markup .= '</nav>';
		return $markup;
	}

	public static function get_class_attribute( string $tab, string $name ) {
		return $tab === $name ? ' nav-tab-active' : '';
	}

	public static function attendees( WP_Post $post ) {
		$order                 = wc_get_order( $post->ID );
		$items                 = $order->get_items();
		$product               = reset( $items );
		$product_id            = $product ? $product->get_product_id() : 0;
		$awarding_body         = AttendeeActionsFilters::get_additional_group_awarding( $product_id );
		$acf_fields            = acf_get_fields( AttendeeActionsFilters::$field_group_id );
		$acf_additional_fields = acf_get_fields( $awarding_body );

		echo sprintf(
			'<div
                id="%s-attendees"
                data-nonce="%s"
                data-quantity="%d"
                data-fields="%s"
                data-order="%s"
                data-group-id="%s"
                data-attendees="%s"
            ><p>Loading attendees...</p></div>',
			esc_attr( PluginUtils::get_kebab_case_name() ),
			esc_attr( wp_create_nonce( 'wp_rest' ) ),
			esc_attr( self::get_order_quantity( $order ) ),
			esc_attr(
				json_encode(
					array_merge(
						$acf_fields,
						$acf_additional_fields
					)
				)
			),
			esc_attr( json_encode( OrderUtils::get_order_data( $post->ID ) ) ),
			esc_attr( json_encode( $order->get_meta( Groups_Access_Meta_Boxes::GROUPS_READ ) ) ),
			esc_attr( json_encode( AttendeeUtils::get_attendee_profiles_by_order_id( $post->ID ) ) )
		);
	}

	private static function get_order_quantity( WC_Order $order ): int {
		return array_reduce( $order->get_items(), fn( $carry, $item ) => $carry += $item->get_quantity(), 0 );
	}

	public static function payment( WP_Post $post ) {
		return '<div><p>Loading payment...</p></div>';
	}

	/**
	 * Creates root element for admin order component
	 *
	 * @see https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/admin/meta-boxes/views/html-order-items.php
	 */
	public static function order_form( WP_Post $post ): string {
		$order = wc_get_order( $post->ID );
		$user  = wp_get_current_user();

		return sprintf(
			'<div 
                id="%s-form" 
                data-nonce="%s" 
                data-group-api-path="%s" 
                data-order-api-path="%s"
                data-product-api-path="%s" 
                data-title="%s" 
                data-status="%s" 
                data-order="%s"
                data-order-id="%d"
                data-group-id="%s"
                data-user-id="%d"
                data-user="%s"
                data-user-meta="%s"
                data-currency="%s"
            ><p>Loading order...</p></div>',
			esc_attr( PluginUtils::get_kebab_case_name() ),
			esc_attr( wp_create_nonce( 'wp_rest' ) ),
			esc_attr( GroupApi::get_api_path() ),
			esc_attr( OrderApi::get_api_path() ),
			esc_attr( ProductApi::get_api_path() ),
			esc_attr( empty( $order->get_title() ) ? __( 'Order', 'lasntgadmin' ) : $order->get_title() ),
			esc_attr( sprintf( '%s', $order->get_status() ) ),
			esc_attr( json_encode( OrderUtils::get_order_data( $post->ID ) ) ),
			esc_attr( $post->ID ),
			esc_attr( json_encode( $order->get_meta( Groups_Access_Meta_Boxes::GROUPS_READ ) ) ),
			esc_attr( $user->ID ),
			esc_attr( json_encode( $user ) ),
			esc_attr( json_encode( array_map( fn( $val) => $val[0], get_user_meta( $user->ID ) ) ) ),
			esc_attr( get_woocommerce_currency() )
		);
	}

	/**
	 * Enqueues admin order component
	 */
	public static function enqueue_components( string $hook ): void {
		$name      = sprintf( '%s-component', PluginUtils::get_kebab_case_name() );
		$post_type = property_exists( get_current_screen(), 'post_type' ) ? get_current_screen()->post_type : false;

		// Load only on ?page=my-first-gutenberg-app.
		if ( ! in_array( $hook, [ 'post.php', 'post-new.php' ] ) || 'shop_order' !== $post_type ) {
			return;
		}

		// Automatically load imported dependencies and assets version.
		$asset_file = include sprintf( '%s/build/index.asset.php', PluginUtils::get_absolute_plugin_path() );

		// Enqueue CSS dependencies.
		foreach ( $asset_file['dependencies'] as $style ) {
			wp_enqueue_style( $style );
		}

		// Load our app.js.
		wp_register_script(
			$name,
			plugins_url( sprintf( '%s/build/index.js', PluginUtils::get_kebab_case_name() ) ),
			$asset_file['dependencies'],
			$asset_file['version']
		);
		wp_enqueue_script( $name );

		// Load our style.css.
		wp_register_style(
			$name,
			plugins_url( sprintf( '%s/style.css', PluginUtils::get_kebab_case_name() ) ),
			array(),
			$asset_file['version']
		);
		wp_enqueue_style( $name );
	}

	/**
	 * Remove default title input on admin add order page.
	 */
	public static function remove_title(): void {
		remove_post_type_support( 'shop_order', 'title' );
	}
}

