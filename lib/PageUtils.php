<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{ OrderUtils, PluginUtils };
use Lasntg\Admin\Group\GroupApi;
use Lasntg\Admin\Products\{ ProductApi, ProductUtils };
use Lasntg\Admin\Attendees\{ AttendeeActionsFilters, AttendeeUtils };
use Lasntg\Admin\PaymentGateway\GrantFunded\FundingSourceUtils;
use Lasntg\Admin\PaymentGateway\GrantFunded\PluginUtils as GrantFundedPaymentGatewayUtils;

use Groups_Access_Meta_Boxes;

use Automattic\WooCommerce\Utilities\OrderUtil;
use Automattic\WooCommerce\Admin\Overrides\Order;
use Automattic\WooCommerce\Internal\Admin\Loader;

use GlobalPayments\WooCommercePaymentGatewayProvider\Plugin;

use WC_Order_Item_Product, WC_Payment_Gateways, WC_Checkout, WC_Product_Simple;
use WC, WC_Session_Handler, WP_Post, WC_Order;
use Automattic\WooCommerce\Checkout\Helpers\ReserveStockException;

use DateTimeImmutable, IntlDateFormatter;

class PageUtils {

	public static function init() {
		self::add_actions();
		self::add_filters();
	}

	/**
	 * Add WordPress and WooCommerce actions.
	 */
	private static function add_actions(): void {
		if ( is_admin() ) {
			add_action( 'add_meta_boxes', [ self::class, 'remove_metaboxes' ], 40, 2 );
			add_action( 'add_meta_boxes', [ self::class, 'add_metaboxes' ], 50, 2 );
			add_action( 'admin_init', [ self::class, 'remove_title' ] );
			add_action( 'admin_print_scripts', [ self::class, 'remove_unused_scripts' ] );
			add_action( 'admin_notices', [ self::class, 'show_wc_notices' ] );
			add_action( 'admin_enqueue_scripts', [ self::class, 'enqueue_components' ], 11 );
		}
		add_action( 'woocommerce_after_pay_action', [ self::class, 'after_pay' ] );
	}

	private static function add_filters() {
		if ( is_admin() ) {
			add_filter( 'use_block_editor_for_post', [ self::class, 'remove_block_editor' ], 50, 2 );
			add_filter( 'user_can_richedit', [ self::class, 'remove_tinymce' ], 50 );
			add_filter( 'wc_order_is_editable', [ self::class, 'is_order_editable' ], 10, 2 );
			add_filter( 'admin_body_class', [ self::class, 'add_admin_body_class' ] );
		}
	}

	public static function add_admin_body_class( string $classes ) {
		$classes .= ' woocommerce-order-pay ';
		return $classes;
	}

	public static function remove_block_editor( bool $use_block_editor, WP_Post $post ) {
		if ( 'shop_order' === $post->post_type ) {
			return false;
		}
		return $use_block_editor;
	}

	public static function remove_tinymce( bool $wp_rich_edit ) {
		if ( function_exists( 'get_post_type' ) ) {
			if ( 'shop_order' === get_post_type() ) {
				return false;
			}
		}
		return $wp_rich_edit;
	}

	public static function remove_unused_scripts() {
		if ( function_exists( 'get_post_type' ) ) {
			if ( 'shop_order' === get_post_type() ) {
				$handles = [ 'wp-mediaelement', 'thickbox', 'woocommerce-order-attribution-admin-js', 'wc-admin-order-meta-boxes', 'image-edit', 'marketplace-suggestions', 'shortcode', 'quicktags' ];
				foreach ( $handles as $handle ) {
					wp_dequeue_script( $handle );
					wp_deregister_script( $handle );
				}
			}
		}
	}

	/**
	 * Save wc notices for display
	 *
	 * @see self::show_notices()
	 */
	public static function after_pay( WC_Order $order ) {
		if ( isset( $_GET['key'] ) && isset( $_GET['pay_for_order'] ) && 'true' === $_GET['pay_for_order'] && ! is_null( WC()->session ) ) {
			$order_key = sanitize_user( wp_unslash( $_GET['key'], true ) );
			if ( $order->key_is_valid( $order_key ) ) {
				$notices = wc_get_notices();
				PaymentUtils::save_notices( $notices );
				wc_clear_notices();
			}
		}
	}

	/**
	 * Shows admin notices for wc notices stored in transient
	 *
	 * @see self::after_pay()
	 */
	public static function show_wc_notices() {
		$notices = PaymentUtils::get_notices();
		if ( isset( $notices['error'] ) ) {
			PaymentUtils::delete_notices();
			$errors = $notices['error'];
			echo "<div class='notice notice-error is-dismissible'>";
			foreach ( $errors as $error ) {
				echo wp_kses( "<p>{$error['notice']}</p>", 'post' );
			}
			echo '</div>';
		}
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
	public static function remove_metaboxes( string $screen_id ): void {
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
				sprintf( '%s #%d', __( 'Enrolment', 'lasntgadmin' ), $order->get_order_number() ),
				[ self::class, 'output_admin_order_markup' ],
				$screen_id,
				'advanced',
				'high'
			);
		}
	}

	public static function output_admin_order_markup( WP_Post $post ): void {

		$tab = isset( $_GET['tab'] ) ? wp_kses( wp_unslash( $_GET['tab'] ), 'post' ) : 'order';

		// @todo Improve this hack.
		if ( 'payment' === $tab ) {
			$order = wc_get_order( $post->ID );
			if ( in_array( $order->get_status(), [ 'completed' ] ) ) {
				printf( "<div class='notice notice-success is-dismissible'><p>%s</p></div>", esc_html( __( 'Payment complete.', 'lasntgadmin' ) ) );
			} else {
				try {
					wc_reserve_stock_for_order( $post->ID );
				} catch ( ReserveStockException $e ) {
					$order->update_status( 'wc-waiting-list' );
					PaymentUtils::save_notices(
						[
							'error' => [
								[ 'notice' => 'The course is now full.' ],
							],
						]
					);
					wp_redirect( get_admin_url( null, sprintf( 'post.php?post=%d&action=edit&tab=order', $post->ID ) ) );
					exit();
				}
			}
		}//end if

		echo '<div class="wrap woocommerce">';
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
		$markup .= "<a href='/wp-admin/post.php?post=$post->ID&action=edit&tab=order' class='nav-tab" . self::get_class_attribute( $tab, 'order' ) . "'>" . __( 'Enrolment', 'lasntgadmin' ) . '</a>';
		// Show attendees tab when order has been created.
		if ( in_array( $post->post_status, [ 'wc-attendees', 'wc-pending', 'wc-completed', 'wc-on-hold' ] ) ) {
			$markup .= "<a href='/wp-admin/post.php?post=$post->ID&action=edit&tab=attendees' class='nav-tab" . self::get_class_attribute( $tab, 'attendees' ) . "'>" . __( 'Attendees', 'lasntgadmin' ) . '</a>';
			/**
			 * Only show payment tab when order and attendees have been created
			 */
			if ( in_array( $post->post_status, [ 'wc-pending', 'wc-completed', 'wc-on-hold' ] ) ) {
				$markup .= "<a href='/wp-admin/post.php?post=$post->ID&action=edit&tab=payment' class='nav-tab" . self::get_class_attribute( $tab, 'payment' ) . "'>" . __( 'Payment', 'lasntgadmin' ) . '</a>';
			}
		}
		$markup .= '</nav>';
		return $markup;
	}

	public static function get_class_attribute( string $tab, string $name ) {
		return $tab === $name ? ' nav-tab-active' : '';
	}

	/**
	 * @todo Improve payment made UI.
	 */
	public static function render_order_paid( WC_Order $order ): void {
		include_once sprintf( '%s/wp-content/plugins/%s/templates/order-paid.php', rtrim( ABSPATH, '/' ), PluginUtils::get_kebab_case_name() );
	}

	public static function render_payment_options( WC_Order $order ): void {
		$product      = OrderUtils::get_product( $order );
		$gateways     = PaymentUtils::get_supported_admin_payment_gateways( $product, $order );
		$checkout_url = $order->get_checkout_payment_url( true );
		$order_key    = parse_str(
			parse_url(
				$checkout_url,
				PHP_URL_QUERY
			),
			$query
		);
		$order_key    = $query['key'];

		echo wp_kses( "<input type='hidden' name='_wp_http_referer' value='/checkout/order-pay/{$order->get_id()}/?pay_for_order=true&key=$order_key'>", 'post' );
		echo '<input type="hidden" name="woocommerce_pay" value="1">';
		echo wp_kses( wp_nonce_field( 'woocommerce-pay', 'woocommerce-pay-nonce' ), 'post' );

		echo wp_kses( "<div id='order_data' class='panel woocommerce-order-data' data-action='/checkout/order-pay/{$order->get_id()}/?pay_for_order=true&key=$order_key'>", 'post' );
		echo '<h3>' . esc_html( __( 'Payment options', 'lasntgadmin' ) ) . '</h3>';

		echo '<ul class="wc_payment_methods payment_methods methods">';

		foreach ( $gateways as $gateway ) {
			PaymentUtils::render_gateway( $gateway );
		}

		if ( ProductUtils::$publish_status === $product->get_status() || 'date_passed' === $product->get_status() ) {
			echo '<button type="submit" class="button alt wp-element-button" id="place_order" disabled >' . esc_html( __( 'Pay for order', 'lasntgadmin' ) ) . '</button>';
		} else {
			echo '<div class="notice notice-warning is-dismissible"><p>Course is not open for enrolment.</p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Course is not open for enrolment.</span></button></div>';
		}

		echo '</ul>';
		echo '</div>';
	}

	/**
	 * @see https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-form-handler.php#L378
	 * @see https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-checkout.php#L1039
	 */
	public static function payment( WP_Post $post ) {
		$order = wc_get_order( $post->ID );

		echo "<div class='panel-wrap woocommerce' >";
		if ( in_array( $order->get_status(), [ 'completed' ] ) ) {
			self::render_order_paid( $order );
		} elseif ( in_array( $order->get_status(), [ 'pending' ] ) ) {
			self::render_payment_options( $order );
		} else {
			wp_redirect( get_admin_url( null, sprintf( 'post.php?post=%d&action=edit&tab=order', $post->ID ) ) );
			exit();
		}
		echo '</div>';
	}

	/**
	 * Creates root element for admin order component
	 *
	 * @see https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/admin/meta-boxes/views/html-order-items.php
	 */
	public static function order_form( WP_Post $post ): string {
		$order      = wc_get_order( $post->ID );
		$user       = wp_get_current_user();
		$product_id = null;
		$product_id = isset( $_GET['product_id'] ) ? absint( $_GET['product_id'] ) : null; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotValidated

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
                data-product-id="%d"
                data-user="%s"
                data-currency="%s"
            ><p>' . __( 'Loading order...', 'lasntgadmin' ) . '</p></div>',
			esc_attr( PluginUtils::get_kebab_case_name() ),
			esc_attr( wp_create_nonce( 'wp_rest' ) ),
			esc_attr( GroupApi::get_api_path() ),
			esc_attr( OrderApi::get_api_path() ),
			esc_attr( ProductApi::get_api_path() ),
			esc_attr( empty( $order->get_title() ) ? __( 'Enrolment', 'lasntgadmin' ) : $order->get_title() ),
			esc_attr( sprintf( '%s', $order->get_status() ) ),
			esc_attr( json_encode( OrderUtils::get_order_data( $post->ID ) ) ),
			esc_attr( $product_id ),
			esc_attr( json_encode( $user ) ),
			esc_attr( get_woocommerce_currency() )
		);
	}

	/**
	 * Leaving here as client may change their mind.
	 *
	 * @deprecated
	 */
	private static function get_awarding_body_fields( WC_Product_Simple $product ): array {
		$awarding_body_acf_field_group_id = AttendeeUtils::get_acf_field_group_id( 'awarding_body', $product->get_id() );
		$awarding_body_fields             = $awarding_body_acf_field_group_id ? acf_get_fields( $awarding_body_acf_field_group_id ) : [];
		return [];
	}

	public static function attendees( WP_Post $post ) {
		$order                      = wc_get_order( $post->ID );
		$product                    = OrderUtils::get_product( $order );
		$attendee_profile_fields    = acf_get_fields( AttendeeActionsFilters::$field_group_id );
		$attendee_additional_fields = array_merge(
			$attendee_profile_fields,
			self::get_awarding_body_fields( $product )
		);

		/**
		 * Only show water grant fields for paid orders
		 */
		if ( $order->get_date_paid() && GrantFundedPaymentGatewayUtils::get_snake_case_name() === $order->get_payment_method() && FundingSourceUtils::is_water_grant_slug( $order->get_meta( 'funding_source' ) ) ) {
			$water_grant_acf_field_group_id = AttendeeUtils::get_acf_field_group_id( 'funding_sources', $product->get_id() );
			$water_grant_fields             = $water_grant_acf_field_group_id ? acf_get_fields( $water_grant_acf_field_group_id ) : [];
			$attendee_additional_fields     = array_merge( $attendee_additional_fields, $water_grant_fields );
		}

		$attendees = array_reverse( AttendeeUtils::get_attendee_profiles_by_order_id( $post->ID ) );

		printf(
			'<div
                id="%s-attendees-form"
                data-nonce="%s"
                data-quantity="%d"
                data-fields="%s"
                data-status="%s"
                data-order="%s"
                data-group-id="%s"
                data-attendees="%s"
                data-product="%s"
            ><p>' . esc_html( __( 'Loading attendees...', 'lasntgadmin' ) ) . '</p></div>',
			esc_attr( PluginUtils::get_kebab_case_name() ),
			esc_attr( wp_create_nonce( 'wp_rest' ) ),
			esc_attr( OrderUtils::get_order_quantity( $order ) ),
			esc_attr( json_encode( $attendee_additional_fields ) ),
			esc_attr( sprintf( '%s', $order->get_status() ) ),
			esc_attr( json_encode( OrderUtils::get_order_data( $post->ID ) ) ),
			esc_attr( json_encode( $order->get_meta( Groups_Access_Meta_Boxes::GROUPS_READ ) ) ),
			esc_attr( json_encode( $attendees ) ),
			esc_attr( json_encode( $product->get_data() ) )
		);
	}


	/**
	 * Enqueues admin order component
	 */
	public static function enqueue_components( string $hook ): void {
		$post_type = property_exists( get_current_screen(), 'post_type' ) ? get_current_screen()->post_type : false;

		if ( 'shop_order' === $post_type && 'edit.php' === $hook ) {
			self::enqueue_orders();
		}
		// Load only on ?page=my-first-gutenberg-app.
		if ( ! in_array( $hook, [ 'post.php', 'post-new.php' ] ) || 'shop_order' !== $post_type ) {
			return;
		}

		wp_deregister_script( 'wc-admin-app' );
		wp_dequeue_script( 'wc-admin-app' );

		self::enqueue_order_and_attendee_tabs();
		self::enqueue_payment_tab();
	}

	private static function enqueue_orders() {
		$name = sprintf( '%s-payment-orders', PluginUtils::get_kebab_case_name() );
		wp_enqueue_style(
			$name,
			plugins_url( sprintf( '%s/assets/css/lasntgadmin-orders.css', PluginUtils::get_kebab_case_name() ) ),
		);
	}
	/**
	 * @see wp-content/plugins/woocommerce/includes/class-wc-frontend-scripts.php
	 */
	private static function enqueue_payment_tab() {
		$name   = sprintf( '%s-payment-tab', PluginUtils::get_kebab_case_name() );
		$result = wp_register_script(
			$name,
			plugins_url( sprintf( '%s/assets/js/lasntgadmin-payments.js', PluginUtils::get_kebab_case_name() ) ),
			[ 'jquery' ],
			PluginUtils::get_version(),
			true
		);
		wp_enqueue_script( $name );
	}

	public static function get_admin_order_script_handle(): string {
		$name = sprintf( '%s-order-and-attendee-tabs', PluginUtils::get_kebab_case_name() );
		return $name;
	}

	private static function enqueue_order_and_attendee_tabs() {
		$name = self::get_admin_order_script_handle();
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
