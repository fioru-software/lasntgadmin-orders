<?php

namespace Lasntg\Admin\Orders;

class PrivatePaymentUtils {

	public static function init() {
		self::add_filters();
	}

	public static function add_filters() {
		add_filter( 'woocommerce_available_payment_gateways', [ self::class, 'payment_gateway_disable_grant_funded' ] );
	}

	public static function payment_gateway_disable_grant_funded( $available_gateways ) {
		if ( ! is_user_logged_in() || is_admin() ) {
			return;
		}
		$id = 'globalpayments_gpapi';
		foreach ( $available_gateways as $key => $available_gateway ) {
			if ( $id !== $key ) {
				unset( $available_gateways[ $key ] );
			}
		}

		return $available_gateways;
	}
}
