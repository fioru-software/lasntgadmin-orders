<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{
	PluginUtils,
	OrderApi,
	OrderData
};
use Lasntg\Admin\Attendees\AttendeeUtils;
use Lasntg\Admin\Group\GroupUtils;

use Groups_Post_Access, Groups_Group, Groups_Access_Meta_Boxes;
use WooCommerce, WC_Order, WC_Meta_Box_Order_Data, WP_REST_Request, WP_Query, WC_Product;
use WC_Abstract_Order;

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
		add_action( 'manage_shop_order_posts_custom_column', [ self::class, 'manage_shop_order_posts_custom_column' ] );
		add_action( 'woocommerce_order_actions_end', [ self::class, 'disable_order_submit_button' ] );
		add_action( 'woocommerce_order_status_cancelled', [ self::class, 'remove_product_ids_from_attendees_meta' ], 10, 2 );
	}

	private static function add_filters() {
		add_filter( 'wc_order_statuses', [ self::class, 'order_statuses' ] );
		add_filter( 'woocommerce_register_shop_order_post_statuses', [ self::class, 'register_shop_order_post_statuses' ] );
		add_filter( 'woocommerce_default_order_status', [ self::class, 'get_default_order_status' ] );
		add_filter( 'manage_edit-shop_order_columns', [ self::class, 'manage_edit_shop_order_columns' ] );
		add_filter( 'posts_where', [ self::class, 'filter_order_list' ], 10, 2 );
		add_filter( 'woocommerce_order_data_store_cpt_get_orders_query', [ self::class, 'handle_filter_orders_by_funding_source' ], 10, 2 );
		add_filter( 'woocommerce_order_data_store_cpt_get_orders_query', [ self::class, 'handle_filter_orders_by_group_id' ], 10, 2 );
		add_filter( 'woocommerce_order_data_store_cpt_get_orders_query', [ self::class, 'handle_filter_orders_by_grant_year' ], 10, 2 );
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

			if ( 'edit-shop_order' === $screen->id && ! current_user_can( 'view_others_shop_orders' ) ) {
				$where .= sprintf( " AND wp_posts.ID IN ( select post_id from wp_postmeta pm where pm.meta_key = '_customer_user' AND pm.meta_value = %d )", get_current_user_id() );
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
		$new_columns = [];
		foreach ( $columns as $column_name => $column_info ) {
			$new_columns[ $column_name ] = $column_info;
			if ( 'order_number' === $column_name ) {
				$new_columns['order_product']        = __( 'Product', 'lasntgadmin' );
				$new_columns['order_quantity']       = __( 'Quantity', 'lasntgadmin' );
				$new_columns['order_group']          = __( 'Group', 'lasntgadmin' );
				$new_columns['order_payment_method'] = __( 'Payment Method', 'lasntgadmin' );
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

		if ( in_array( $column, [ 'order_product', 'order_quantity' ] ) ) {
			$line_item = current( $order->get_items( 'line_item' ) );
			if ( $line_item ) {
				if ( 'order_product' === $column ) {
					$product = $line_item->get_product();
					echo esc_html( $product->get_name() );
				}
				if ( 'order_quantity' === $column ) {
					echo esc_html( $line_item->get_quantity() );
				}
			}
		}
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
		return reset( $items )->get_product();
	}

	public static function get_product_id( WC_Order $order ): int {
		$product = self::get_product( $order );
		return $product->get_id();
	}

	public static function get_product_ids( array $order_ids ): array {
		$product_ids = array_filter(
			array_map(
				function( $order_id ) {
                    $order = wc_get_order( (int)$order_id );
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
		$attendee_ids = $order->get_meta( 'attendee_ids', true );
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
