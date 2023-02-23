<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\PaymentUtils;

use WP_REST_Request;

class PaymentApi {

	protected static $instance = null;

	const PATH_PREFIX = 'lasntgadmin/orders/v1';

	protected function __construct() {
		register_rest_route(
			self::PATH_PREFIX,
			'/pay',
			[
				'methods'             => 'POST',
				'callback'            => [ self::class, 'process_payment' ],
				'permission_callback' => [ self::class, 'auth_process_payment' ],
			]
		);
	}

	public static function get_instance(): OrderApi {
		if ( null === self::$instance ) {
			self::$instance = new OrderApi();
		}
		return self::$instance;
	}


	public static function get_api_path(): string {
		return sprintf( '/%s', self::PATH_PREFIX );
	}

    /**
     * @todo current_user_can()
     */
	public static function auth_process_payment( WP_REST_Request $req ) {
		if ( ! wp_verify_nonce( $req->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return new WP_Error( 'invalid_nonce', 'Invalid nonce', array( 'status' => 403 ) );
		}
		return true;
	}

	/**
	 * POST
	 *
	 * @param WP_REST_Request $req The WordPress request object.
	 * @return array|WP_Error
	 */
	public static function process_payment( WP_REST_Request $req ): array {
        $selected_payment_method = WC()->payment_gateways()->payment_gateways()[ $selected_payment_method_id ];

	}
}
