<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Group\GroupUtils;
use Groups_Post_Access;
use Exception;

class PaymentGatewayActionsFilters {

	public static function init() {
		self::add_filters();
	}

	public static function add_filters() {
		add_filter( 'woocommerce_available_payment_gateways', [ self::class, 'filter_available_payment_gateways' ] );
	}

	public static function filter_available_payment_gateways( array $available_gateways ): array {

		error_log("==== filter available payment gateways ===");
		// admin orders.
		if ( is_admin() || ( isset( $_POST['post_type'] ) && 'shop_order' === $_POST['post_type'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
			return $available_gateways;
		}

		if( is_checkout() ) {
			$cart = WC()->cart;
			if( ! $cart->is_empty() ) {
				$cart_item_count = $cart->get_cart_contents_count();
				if( $cart_item_count > 1 ) {
					$cart->empty_cart();
					wp_safe_redirect( wc_get_page_permalink( 'shop' ) );
					return [];
				}
				$cart_items = $cart->get_cart();
				$cart_item = current( $cart_items );
				$product_id = $cart_item['product_id'];
				$training_centre_id = get_field('training_centre', $product_id, false, false );
			}
		}

		// shop orders.
		// lasntgadmin_grant_funded_payment_gateway, woocommerce_gateway_purchase_order
		$allowed_gateway_ids = [ 'realex_redirect', 'cod' ];

		return array_filter( $available_gateways, fn( $gateway_id ) => in_array( $gateway_id, $allowed_gateway_ids ), ARRAY_FILTER_USE_KEY );
	}
}
