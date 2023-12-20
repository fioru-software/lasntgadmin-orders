<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\OrderUtils;

use WP_REST_Request, WP_Error;

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
				'permission_callback' => [ self::class, 'auth_nonce' ],
			]
		);

		register_rest_route(
			self::PATH_PREFIX,
			'/completed',
			[
				'methods'             => 'GET',
				'callback'            => [ self::class, 'get_completed_orders' ],
				'permission_callback' => [ self::class, 'auth_nonce' ],
			]
		);

		register_rest_route(
			self::PATH_PREFIX,
			'/total_attendees',
			[
				'methods'             => 'GET',
				'callback'            => [ self::class, 'get_total_attendees' ],
				'permission_callback' => [ self::class, 'auth_nonce' ],
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
	 * @return bool|WP_Error
	 */
	public static function auth_nonce( WP_REST_Request $req ) {
		if ( ! wp_verify_nonce( $req->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return new WP_Error( 'invalid_nonce', 'Invalid nonce', array( 'status' => 403 ) );
		}
		return true;
	}

	/**
	 * @return int[]|WP_Error
	 */
	public static function get_completed_orders( WP_REST_Request $req ) {
		$product_id = $req->get_param( 'product_id' );
		$group_id   = $req->get_param( 'group_id' ) ?? 0;
		if ( empty( $product_id ) ) {
			return new WP_Error( 'missing_product_id', 'Missing product id param', array( 'status' => 400 ) );
		}
		return OrderUtils::get_order_ids_by_product_id( intval( $product_id ), intval( $group_id ), [ 'wc-completed', 'wc-on-hold', 'wc-processing' ] );
	}

	/**
	 * @return int|WP_Error
	 */
	public static function get_total_attendees( WP_REST_Request $req ) {
		$product_id = $req->get_param( 'product_id' );
		$group_id   = $req->get_param( 'group_id' ) ?? 0;
		if ( empty( $product_id ) ) {
			return new WP_Error( 'missing_product_id', 'Missing product id param', array( 'status' => 400 ) );
		}
		return OrderUtils::get_total_attendees_for_completed_orders_by_product_id_and_group_id( intval( $product_id ), intval( $group_id ) );
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
