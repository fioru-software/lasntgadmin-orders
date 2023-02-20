<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{
	PluginUtils,
	OrderApi,
	OrderData
};

use Lasntg\Admin\Group\GroupUtils;

use Groups_Post_Access, Groups_Group, Groups_Access_Meta_Boxes;
use WC_Order, WC_Meta_Box_Order_Data, WP_REST_Request, WP_Query;

use function wc_get_order_statuses;

/**
 * Order Utility Class
 */
class OrderUtils {

	public static function add_filters() {
		add_filter( 'wc_order_statuses', [ self::class, 'order_statuses' ] );
		add_filter( 'woocommerce_register_shop_order_post_statuses', [ self::class, 'register_shop_order_post_statuses' ] );
		add_filter( 'woocommerce_default_order_status', [ self::class, 'get_default_order_status' ] );
		add_filter( 'manage_edit-shop_order_columns', [ self::class, 'manage_edit_shop_order_columns' ] );
		add_filter( 'posts_where', [ self::class, 'filter_order_list' ], 10, 2 );
	}

	public static function add_actions() {
		add_action( 'rest_api_init', [ OrderApi::class, 'get_instance' ] );
		add_action( 'manage_shop_order_posts_custom_column', [ self::class, 'manage_shop_order_posts_custom_column' ] );

		add_action( 'woocommerce_rest_insert_shop_order_object', [ self::class, 'insert_shop_order_meta' ], 10, 2 );

		add_action( 'woocommerce_order_actions_end', [ self::class, 'disable_order_submit_button' ] );
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

	/**
	 * Update user meta when order is created
	 *
	 * @see https://developer.wordpress.org/reference/classes/wp_rest_request/
	 */
	public static function insert_shop_order_meta( WC_Order $order, WP_REST_Request $req ) {
		$params = $req->get_params();

		if ( isset( $params['customer_id'] ) ) {
			update_user_meta( $params['customer_id'], 'billing_first_name', wc_clean( $params['billing']['first_name'] ) );
			update_user_meta( $params['customer_id'], 'first_name', wc_clean( $params['billing']['first_name'] ) );
			update_user_meta( $params['customer_id'], 'billing_last_name', wc_clean( $params['billing']['last_name'] ) );
			update_user_meta( $params['customer_id'], 'last_name', wc_clean( $params['billing']['last_name'] ) );

			update_user_meta( $params['customer_id'], 'billing_address_1', wc_clean( $params['billing']['address_1'] ) );
			update_user_meta( $params['customer_id'], 'billing_address_2', wc_clean( $params['billing']['address_2'] ) );
			update_user_meta( $params['customer_id'], 'billing_city', wc_clean( $params['billing']['city'] ) );
			update_user_meta( $params['customer_id'], 'billing_country', wc_clean( $params['billing']['country'] ) );
			update_user_meta( $params['customer_id'], 'billing_state', wc_clean( $params['billing']['state'] ) );
			update_user_meta( $params['customer_id'], 'billing_postcode', wc_clean( $params['billing']['postcode'] ) );
			update_user_meta( $params['customer_id'], 'billing_phone', wc_clean( $params['billing']['phone'] ) );
		}
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
				$new_columns['order_product']  = __( 'Product', 'lasntgadmin' );
				$new_columns['order_quantity'] = __( 'Quantity', 'lasntgadmin' );
				$new_columns['order_group']    = __( 'Group', 'lasntgadmin' );
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

	/**
	 * @todo param should rather be WC_Order
	 */
	public static function get_product_id( int $order_id ): int {
		$order   = wc_get_order( $order_id );
		$items   = $order->get_items();
		$product = reset( $items );
		return $product->get_product_id();
	}

	/**
	 * @todo param should rather be WC_Order's
	 */
	public static function get_product_ids( array $order_ids ): array {
		$product_ids = array_map(
			fn( $order_id ) => self::get_product_id( $order_id ),
			$order_ids
		);
		return $product_ids;
	}

}
