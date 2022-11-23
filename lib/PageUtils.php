<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{ PluginUtils, OrderData };
use Lasntg\Admin\Group\GroupApi;
use Lasntg\Admin\Products\ProductApi;

use Groups_Access_Meta_Boxes;

use Automattic\WooCommerce\Utilities\OrderUtil;
use Automattic\WooCommerce\Admin\Overrides\Order;

use WP_Post;

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

	public static function add_filters(): void {
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
				[ self::class, 'output_order_form' ],
				$screen_id,
				'advanced',
				'high'
			);
		}
	}

	/**
	 * Creates root element for admin order component
	 *
	 * @see https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/admin/meta-boxes/views/html-order-items.php
	 */
	public static function output_order_form( $post ): void {
		$order = wc_get_order( $post->ID );
		$user  = wp_get_current_user();

		echo sprintf(
			'<div 
                id="%s-component" 
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
            ><p>Loading order component...</p></div>',
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

