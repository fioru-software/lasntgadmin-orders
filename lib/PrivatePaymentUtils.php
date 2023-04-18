<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Group\GroupUtils;
use Groups_Post_Access;

class PrivatePaymentUtils {

	public static function init() {
		self::add_filters();
	}

	public static function add_filters() {
		add_filter( 'woocommerce_available_payment_gateways', [ self::class, 'filter_available_payment_gateways' ] );
	}

	public static function filter_available_payment_gateways( $available_gateways ) {

		// admin orders.
		if ( is_admin() || ( isset( $_POST['post_type'] ) && 'shop_order' === $_POST['post_type'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
			return $available_gateways;
		}

		// shop orders.
		$allowed_gateway_ids = [ 'globalpayments_gpapi' ];
		return array_filter( $available_gateways, fn( $gateway_id ) => in_array( $gateway_id, $allowed_gateway_ids ), ARRAY_FILTER_USE_KEY );
	}
}
