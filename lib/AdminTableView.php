<?php

namespace Lasntg\Admin\Orders;

use WP_Query;

class AdminTableView {

	public static function init() {
		self::add_actions();
		self::add_filters();
	}

	private static function add_actions() {
		add_action( 'rest_api_init', [ self::class, 'register_meta' ] );
	}

	private static function add_filters() {
		add_filter( 'post_row_actions', [ self::class, 'modify_order_row_actions' ], 101, 2 );
		// WC uses priority 100.
		add_filter( 'parse_query', [ self::class, 'handle_filter_request' ] );
		add_filter( 'woocommerce_register_post_type_shop_order', [ self::class, 'register_post_type_shop_order' ] );
	}

	public static function register_post_type_shop_order( array $args ): array {
		if ( ! array_key_exists( 'show_in_rest', $args ) ) {
			$args['show_in_rest'] = true;
		}
		return $args;
	}

	public static function register_meta() {
		register_meta(
			'post',
			'groups-read',
			[
				'object_subtype' => 'shop_order',
				'type'           => 'integer',
				'description'    => "Group id's of order group memberships",
				'single'         => false,
				'show_in_rest'   => true,
			]
		);
		register_meta(
			'post',
			'attendee_ids',
			[
				'object_subtype' => 'shop_order',
				'type'           => 'integer',
				'description'    => "Attendee id's order is associated with",
				'single'         => false,
				'show_in_rest'   => true,
			]
		);
	}

	public static function modify_order_row_actions( $actions, $post ) {
		if ( 'shop_order' === $post->post_type ) {
			$actions['attendees'] = sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url( admin_url( sprintf( 'edit.php?post_type=attendee&order_id=%d', $post->ID ) ) ),
				esc_html( __( 'Attendees', 'lasntgadmin' ) )
			);
		}

		return $actions;
	}

	/**
	 * Add additional filters dropdowns.
	 */
	public static function handle_filter_request( WP_Query $query ): WP_Query {
		if ( is_admin() && function_exists( 'get_current_screen' ) ) {
			$screen = get_current_screen();
			if ( 'shop_order' === $screen->post_type && 'edit-shop_order' === $screen->id && 'shop_order' === $query->query_vars['post_type'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				if ( isset( $_GET['attendee_id'] ) && ! empty( $_GET['attendee_id'] ) ) {
					$query = self::handle_filter_by_attendee_id( $query );
				}
			}
		}//end if
		return $query;
	}

	private static function handle_filter_by_attendee_id( WP_Query $query ): WP_Query {
		if ( isset( $_GET['attendee_id'] ) && ! empty( $_GET['attendee_id'] ) ) {
			$attendee_id     = absint( $_GET['attendee_id'] ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$attendee_filter = [
				'key'     => 'attendee_ids',
				'compare' => '=',
				'type'    => 'NUMERIC',
				'value'   => $attendee_id,
			];

			if ( array_key_exists( 'meta_query', $query->query_vars ) && is_array( $query->query_vars['meta_query'] ) ) {
				array_push( $query->query_vars['meta_query'], $attendee_filter );
				array_push( $query->query['meta_query'], $attendee_filter );
			} else {
				$query->query_vars['meta_query'] = [ $attendee_filter ]; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
				$query->query['meta_query']      = [ $attendee_filter ]; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
			}
		}
		return $query;
	}

}
