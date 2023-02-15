<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\OrderUtils;

use WP_REST_Request;

class OrderApi {

	protected static $instance = null;

	const PATH_PREFIX = 'lasntgadmin/orders/v1';

	protected function __construct() {
		register_rest_route(
			self::PATH_PREFIX,
			'/statuses',
			[
				'methods'             => 'GET',
				'callback'            => [ self::class, 'get_statuses' ],
				'permission_callback' => [ self::class, 'auth_get_statuses' ],
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

	public static function auth_get_statuses( WP_REST_Request $req ) {
		if ( ! wp_verify_nonce( $req->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return new WP_Error( 'invalid_nonce', 'Invalid nonce', array( 'status' => 403 ) );
		}
		return true;
	}

	/**
	 * GET
	 *
	 * @param WP_REST_Request $req The WordPress request object.
	 * @return array|WP_Error
	 */
	public static function get_statuses( WP_REST_Request $req ): array {
		return OrderUtils::get_statuses();
	}
}
