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
		$is_private = self::is_private_client();
		$id         = 'lasntgadmin_grant_funded_payment_gateway';
		if ( $is_private && isset( $available_gateways[ $id ] ) ) {
			unset( $available_gateways[ $id ] );
		}

		return $available_gateways;
	}

	private static function is_private_client() {
		$user  = wp_get_current_user();
		$roles = (array) $user->roles;
		return in_array( 'customer', $roles ) !== false;
	}
}
