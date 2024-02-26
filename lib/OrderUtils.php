<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{
	PluginUtils,
	OrderApi,
};
use Lasntg\Admin\Attendees\AttendeeUtils;
use Lasntg\Admin\Group\GroupUtils;

use Groups_Post_Access, Groups_Group, Groups_Access_Meta_Boxes;
use WooCommerce, WC_Order, WC_Meta_Box_Order_Data, WP_REST_Request, WP_Query, WC_Product;
use WC_Abstract_Order, WP_Error;
use DateTime;

use Exception;
use Lasntg\Admin\Products\{ QuotaUtils };

/**
 * Order Utility Class
 */
class OrderUtils {

	public static function init() {
		self::add_filters();
		self::add_actions();
	}

	private static function add_actions() {
		add_action( 'rest_api_init', [ OrderApi::class, 'get_instance' ] );
		if ( is_admin() ) {
			add_action( 'manage_shop_order_posts_custom_column', [ self::class, 'manage_shop_order_posts_custom_column' ] );
			add_action( 'woocommerce_order_actions_end', [ self::class, 'disable_order_submit_button' ] );
			add_action( 'woocommerce_order_status_cancelled', [ self::class, 'remove_product_ids_from_attendees_meta' ], 10, 2 );
			add_action( 'woocommerce_order_status_failed', [ self::class, 'release_reserved_stock' ], 10, 2 );
			add_action( 'woocommerce_order_status_failed', [ self::class, 'remove_product_ids_from_attendees_meta' ], 10, 2 );
			add_action( 'woocommerce_pre_payment_complete', [ self::class, 'can_order_be_placed' ], 10, 2 );
		}
	}

	private static function add_filters() {
		add_filter( 'rest_pre_insert_shop_order', [ self::class, 'ensure_unique_enrolment' ], 10, 2 );
		add_filter( 'woocommerce_register_shop_order_post_statuses', [ self::class, 'register_shop_order_post_statuses' ] );
		add_filter( 'woocommerce_default_order_status', [ self::class, 'get_default_order_status' ] );
		add_filter( 'wc_order_statuses', [ self::class, 'order_statuses' ] );
		if ( is_admin() ) {
			add_filter( 'manage_edit-shop_order_columns', [ self::class, 'manage_edit_shop_order_columns' ] );
			add_filter( 'posts_where', [ self::class, 'filter_order_list' ], 10, 2 );
			add_filter( 'woocommerce_order_data_store_cpt_get_orders_query', [ self::class, 'handle_filter_orders_by_funding_source' ], 10, 2 );
			add_filter( 'woocommerce_order_data_store_cpt_get_orders_query', [ self::class, 'handle_filter_orders_by_group_id' ], 10, 2 );
			add_filter( 'woocommerce_order_data_store_cpt_get_orders_query', [ self::class, 'handle_filter_orders_by_grant_year' ], 10, 2 );
		}
	}


	public static function can_order_be_placed( int $order_id ) {

		$order    = wc_get_order( $order_id );
		$product  = self::get_product( $order );
		$group_id = $order->get_meta( 'groups-read' );

		/**
		 * Ensure sufficient group quota
		 */
		$order_quantity = self::get_order_quantity( $order );
		$quota          = QuotaUtils::remaining_quota( $product->get_id(), $group_id );
		if ( is_numeric( $quota ) ) {
			$total_attendees = self::get_total_attendees_for_completed_orders_by_product_id_and_group_id(
				$product->get_id(),
				$group_id
			);
			$remaining_quota = $quota - $total_attendees;
			if ( $remaining_quota < $order_quantity ) {
				$order->update_status( 'wc-waiting-list' );
				// translators: Remaining course quota for group.
				$error_msg = sprintf( __( 'Remaining quota of %d is insufficient.', 'lasntgadmin' ), $remaining_quota );
				wc_add_notice( $error_msg, 'error' );
				throw new Exception( esc_html( $error_msg ) );
			}
		}

		/**
		 * Ensure sufficient spaces available on course
		 */
		$spaces = $product->get_stock_quantity() - wc_get_held_stock_quantity( $product, $order_id );
		if ( $order_quantity > $spaces ) {
			$order->update_status( 'wc-waiting-list' );
			// translators: Remaining spaces on course.
			$error_msg = sprintf( __( 'Remaining spaces of %d is insufficient.', 'lasntgadmin' ), $spaces );
			wc_add_notice( $error_msg, 'error' );
			throw new Exception( esc_html( $error_msg ) );
		}
	}

	/**
	 * @see PageUtils::output_admin_order_markup
	 */
	public static function release_reserved_stock( int $order_id, WC_Order $order ): void {
		wc_release_stock_for_order( $order_id );
	}

	public static function remove_product_ids_from_attendees_meta( int $order_id, WC_Order $order ): void {
		$order_attendee_ids = array_values(
			array_map(
				fn( $meta ) => (int) $meta->value,
				$order->get_meta( 'attendee_ids', false )
			)
		);
		foreach ( $order_attendee_ids as $attendee_id ) {
			delete_post_meta( (int) $attendee_id, 'product_ids', self::get_product_id( $order ) );
		}
	}

	public static function get_order_quantity( WC_Order $order ): int {
		return array_reduce( $order->get_items(), fn( $carry, $item ) => $carry += $item->get_quantity(), 0 );
	}

	/**
	 * Each order's meta data contains an array of attendee_ids, which we count and sum.
	 */
	public static function get_total_attendees_for_completed_orders_by_product_id_and_group_id( int $product_id, int $group_id = 0 ): int {
		$completed_order_ids = self::get_order_ids_by_product_id( $product_id, $group_id, [ 'wc-completed', 'wc-on-hold', 'wc-processing' ] );
		return array_reduce(
			$completed_order_ids,
			function ( $count, $order_id ) {
				$count += count( get_post_meta( $order_id, 'attendee_ids', false ) );
				return $count;
			},
			0
		);
	}

	/**
	 * @param int   $product_id Required. A product id.
	 * @param int   $group_id Optional.  A group id.
	 * @param array $order_status Optional array of order statuses.
	 * @return int[]
	 */
	public static function get_order_ids_by_product_id( int $product_id, int $group_id = 0, array $order_status = [] ): array {
		global $wpdb;

		$order_statuses = implode( "','", $order_status );

		$args   = [ $product_id ];
		$select = "SELECT ID FROM {$wpdb->posts}";
		$joins  = [
			"JOIN wp_woocommerce_order_items ON wp_woocommerce_order_items.order_id = {$wpdb->posts}.ID",
			'JOIN wp_woocommerce_order_itemmeta ON wp_woocommerce_order_items.order_item_id = wp_woocommerce_order_itemmeta.order_item_id',
		];
		$wheres = [
			"WHERE {$wpdb->posts}.post_type = 'shop_order'",
			"AND wp_woocommerce_order_items.order_item_type = 'line_item' AND wp_woocommerce_order_itemmeta.meta_key = '_product_id'",
			'AND wp_woocommerce_order_itemmeta.meta_value = %d',
		];

		if ( count( $order_status ) > 0 ) {
			array_push(
				$wheres,
				"AND {$wpdb->posts}.post_status IN ( '$order_statuses' ) "
			);
		}

		if ( $group_id > 0 ) {
			array_push(
				$joins,
				"JOIN {$wpdb->postmeta} ON {$wpdb->postmeta}.post_id = {$wpdb->posts}.ID"
			);
			array_push(
				$wheres,
				"AND {$wpdb->postmeta}.meta_key = 'groups-read' AND {$wpdb->postmeta}.meta_value = %d"
			);
			array_push(
				$args,
				$group_id
			);
		}

		$join      = implode( ' ', $joins );
		$where     = implode( ' ', $wheres );
		$statement = $wpdb->prepare(
			"$select $join $where", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			...$args
		);
		$order_ids = $wpdb->get_col( $statement ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared    
		return $order_ids;
	}

	/**
	 * Prevents an attendee from enrolling into the same course more than once.
	 *
	 * @return stdClass|WP_Error Post object or WP_Error.
	 */
	public static function ensure_unique_enrolment( $post, WP_REST_Request $req ) {
		if ( ! is_wp_error( $post ) ) {
			$params = $req->get_params();

			/**
			 * We only set ?attendee_id query param when removing an attendee from the order.
			 * Additionally we make sure the attendee_id is being removed from order's attendee_ids.
			 */
			if ( isset( $params['attendee_id'] ) && ! in_array( $params['attendee_id'], $params['meta']['attendee_ids'], false ) ) {
				return $post;
			}

			/**
			 * We check that each attendee is not already enrolled in this course
			 * by checking that the attendee's product_ids does not contain this order's product id
			 */
			if ( isset( $params['id'] ) && isset( $params['meta']['attendee_ids'] ) ) {
				$request_attendee_ids = $params['meta']['attendee_ids'];

				$order_id           = intval( $params['id'] );
				$order              = wc_get_order( $order_id );
				$order_attendee_ids = get_post_meta( $order_id, 'attendee_ids', false );

				$product_id = self::get_product_id( $order );

				foreach ( $request_attendee_ids as $request_attendee_id ) {
					/**
					 * Only check addition of new attendees.
					 */
					if ( ! in_array( $request_attendee_id, $order_attendee_ids ) ) {
						if ( ! AttendeeUtils::is_unique_product_id( $product_id, intval( $request_attendee_id ) ) ) {
							$attendee = AttendeeUtils::get_attendee_with_profile( get_post( intval( $request_attendee_id ) ) );
							return new WP_Error(
								'attendee_already_enrolled',
								// translators: An employee number.
								sprintf( __( 'Attendee with employee number %s is already enrolled in this course.', 'lasntgadmin' ), $attendee->acf['employee_number'] ),
								$attendee
							);
						}
					}
				}
			}//end if
		}//end if
		return $post;
	}

	public static function autocomplete_order( $order_id ) {
		if ( ! $order_id ) {
			return;
		}
		$order = wc_get_order( $order_id );
		$order->update_status( 'completed' );
	}

	/**
	 * Handle a custom 'customvar' query var to get orders with the 'customvar' meta.
	 *
	 * @param array $query - Args for WP_Query.
	 * @param array $query_vars - Query vars from WC_Order_Query.
	 * @return array modified $query
	 */
	public static function handle_filter_orders_by_funding_source( $query, $query_vars ) {
		if ( ! empty( $query_vars['funding_source'] ) ) {
			$query['meta_query'][] = array(
				'key'   => 'funding_source',
				'value' => esc_attr( $query_vars['funding_source'] ),
			);
		}
		return $query;
	}

	/**
	 * Filter order by local authority group
	 */
	public static function handle_filter_orders_by_group_id( $query, $query_vars ) {
		if ( ! empty( $query_vars['group_id'] ) ) {
			$query['meta_query'][] = array(
				'key'   => 'groups-read',
				'value' => esc_attr( $query_vars['group_id'] ),
			);
		}
		return $query;
	}

	/**
	 * Filter order by grant year
	 */
	public static function handle_filter_orders_by_grant_year( $query, $query_vars ) {
		if ( ! empty( $query_vars['grant_year'] ) ) {
			$query['meta_query'][] = array(
				'key'   => 'grant_year',
				'value' => esc_attr( $query_vars['grant_year'] ),
			);
		}
		return $query;
	}

	/**
	 *
	 * By default WC saves all orders with author id = 1, so we need to look at the customer_id stored as order meta data
	 *
	 * @see woocommerce_new_order_data filter
	 * @see https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/data-stores/abstract-wc-order-data-store-cpt.php#L74
	 */
	public static function filter_order_list( string $where, WP_Query $query ) {
		if ( $query->is_admin && $query->get( 'post_type' ) === 'shop_order' ) {
			$screen = get_current_screen();
			if ( $screen ) {
				if ( 'edit-shop_order' === $screen->id && ! current_user_can( 'view_others_shop_orders' ) ) {
					$where .= sprintf( " AND wp_posts.ID IN ( select post_id from wp_postmeta pm where pm.meta_key = '_customer_user' AND pm.meta_value = %d )", get_current_user_id() );
				}
			}
		}

		return $where;
	}

	public static function get_statuses() {
		$order_statuses = wc_get_order_statuses();
		return array_map(
			fn( string $id, string $status ) => (object) [
				'id'   => substr( $id, 3 ),
				'name' => $status,
			],
			array_keys( $order_statuses ),
			array_values( $order_statuses )
		);
	}

	public static function get_status( WC_Order $order ) {
		$status   = $order->get_status( 'edit' );
		$statuses = wc_get_order_statuses();
		if ( in_array( sprintf( 'wc-%s', $status ), array_keys( $statuses ) ) ) {
			return $status;
		}
		return self::get_default_order_status();
	}

	public static function get_default_order_status() {
		return 'attendees';
	}

	/**
	 * @see https://woocommerce.github.io/code-reference/files/woocommerce-includes-wc-order-functions.html#source-view.93
	 */
	public static function order_statuses( array $order_statuses ): array {
		return array_merge(
			[
				'wc-attendees' => _x( 'Pending attendees', 'Order status', 'lasntgadmin' ),
			],
			$order_statuses
		);
	}

	public static function register_shop_order_post_statuses( array $order_statuses ) {
		$order_statuses['wc-attendees'] = [
			'label'                     => _x( 'Pending attendees', 'Order Status', 'lasntgadmin' ),
			'public'                    => false,
			'exclude_from_search'       => false,
			'show_in_admin_all_list'    => true,
			'show_in_admin_status_list' => true,
			/* translators: %s is replaced with the number of orders with the pending attendees status */
			'label_count'               => _n_noop( 'Pending attendees <span class="count">(%s)</span>', 'Pending attendees <span class="count">(%s)</span>', 'lasntgadmin' ),
		];
		return $order_statuses;
	}

	public static function manage_edit_shop_order_columns( $columns ) {
		$columns['order_date'] = 'Order Date';
		$new_columns           = [];
		foreach ( $columns as $column_name => $column_info ) {
			$new_columns[ $column_name ] = $column_info;
			if ( 'order_number' === $column_name ) {
				$new_columns['order_product']                = __( 'Course', 'lasntgadmin' );
				$new_columns['order_product_start_datetime'] = __( 'Course Start', 'lasntgadmin' );
				$new_columns['order_quantity']               = __( 'Quantity', 'lasntgadmin' );
				$new_columns['order_group']                  = __( 'Group', 'lasntgadmin' );
				$new_columns['order_payment_method']         = __( 'Payment Method', 'lasntgadmin' );
			}
		}
		return $new_columns;
	}

	public static function manage_shop_order_posts_custom_column( string $column ) {
		global $post;

		$order = wc_get_order( $post->ID );

		if ( 'order_group' === $column ) {
			$group_id = $order->get_meta( 'groups-read' );
			$group    = new Groups_Group( $group_id );
			echo esc_html( $group->name );
		}

		if ( 'order_payment_method' === $column ) {
			echo esc_html( $order->get_payment_method_title() );
		}

		if ( in_array( $column, [ 'order_product', 'order_quantity', 'order_product_start_datetime' ] ) ) {
			$line_item = current( $order->get_items( 'line_item' ) );
			if ( $line_item ) {
				if ( 'order_product' === $column ) {
					$product = $line_item->get_product();
					if ( is_a( $product, 'WC_Product' ) ) {
						echo esc_html( $product->get_name() );
					}
				}
				if ( 'order_quantity' === $column ) {
					echo esc_html( $line_item->get_quantity() );
				}
				if ( 'order_product_start_datetime' === $column ) {
					$product = $line_item->get_product();
					if ( is_a( $product, 'WC_Product' ) ) {
						$course_start_date = get_field( 'field_63881aee31478', $product->get_id() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						$course_start_time = get_field( 'field_63881b0531479', $product->get_id() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						if ( ! empty( $course_start_date ) && ! empty( $course_start_time ) ) {
							echo wp_kses_data( date_format( DateTime::createFromFormat( 'd/m/Y g:i a', "$course_start_date $course_start_time" ), 'H:i M j, Y' ) );
						}
					}
				}
			}//end if
		}//end if
	}

	/**
	 * Get JSON friendly order data
	 */
	public static function get_order_data( int $order_id ): array {
		$order                    = wc_get_order( $order_id );
		$order_data               = $order->get_data();
		$order_items              = $order->get_items();
		$order_data['line_items'] = array_values( array_map( fn( $order_item ) => $order_item->get_data(), $order_items ) );
		return $order_data;
	}

	public static function get_product( WC_Order $order ): WC_Product {
		$items = $order->get_items();
		if ( count( $items ) ) {
			return reset( $items )->get_product();
		}
	}

	public static function get_product_id( WC_Order $order ): int {
		$product = self::get_product( $order );
		if ( is_a( $product, 'WC_Product' ) ) {
			return $product->get_id();
		}
	}

	public static function get_product_ids( array $order_ids ): array {
		$product_ids = array_filter(
			array_map(
				function ( $order_id ) {
					$order = wc_get_order( (int) $order_id );
					if ( is_a( $order, 'WC_Abstract_Order' ) ) {
						return self::get_product_id( $order );
					}
				},
				$order_ids
			)
		);
		return $product_ids;
	}

	public static function get_attendees( WC_Order $order ): array {
		$attendee_ids = get_post_meta(
			$order->get_id(),
			'attendee_ids'
		);
		if ( ! empty( $attendee_ids ) ) {
			return AttendeeUtils::get_attendee_profiles(
				get_posts(
					[
						'post_type'           => 'attendee',
						'include'             => $attendee_ids,
						'ignore_sticky_posts' => true,
					]
				)
			);
		}
		return [];
	}

	/**
	 * Get orders with the same group memberships as my user.
	 *
	 * @see https://github.com/woocommerce/woocommerce/wiki/wc_get_orders-and-WC_Order_Query
	 * @return WC_Order[]
	 */
	public static function get_visible_orders(): array {
		return wc_get_orders(
			[
				'meta_query' => [
					[
						'key'     => 'groups-read',
						'compare' => 'IN',
						'value'   => GroupUtils::get_current_users_group_ids(),
					],
				],
			]
		);
	}
}
