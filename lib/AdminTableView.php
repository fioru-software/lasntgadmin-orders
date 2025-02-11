<?php

namespace Lasntg\Admin\Orders;

use Exception;
use Lasntg\Admin\Group\GroupUtils;

use WP_Query;

/**
 * Table showing list of orders.
 */
class AdminTableView {

	public static function init() {
		self::add_actions();
		self::add_filters();
	}

	private static function add_actions() {
		add_action( 'rest_api_init', [ self::class, 'register_meta' ] );
		add_action( 'manage_shop_order_posts_custom_column', [ self::class, 'render_product_column' ], 10, 2 );
		add_action( 'admin_enqueue_scripts', [ self::class, 'enqueue_stylesheet' ], 11 );
	}

	private static function add_filters() {

		add_filter( 'woocommerce_register_post_type_shop_order', [ self::class, 'register_post_type_shop_order' ] );

		if ( is_admin() ) {
			add_filter( 'manage_edit-shop_order_columns', [ self::class, 'modify_columns' ], 15 );
			add_filter( 'manage_edit-shop_order_columns', [ self::class, 'add_email_column' ], 15 );
			add_filter( 'manage_shop_order_columns', [ self::class, 'modify_columns' ], 15 );
			add_filter( 'bulk_actions-edit-shop_order', [ self::class, 'modify_order_bulk_actions' ], 101 );
			// WC uses priority 100.
			add_filter( 'post_row_actions', [ self::class, 'modify_order_row_actions' ], 101, 2 );
			add_filter( 'parse_query', [ self::class, 'handle_filter_query' ] );

			// Filter orders by product id.
			add_filter( 'posts_clauses', [ self::class, 'handle_filter_clauses' ], 101, 2 );
			/**
			 * RTC Managers need the Group plugin's Administer Groups permission, so that they can assign groups when creating users,
			 * but this setting also allows them to see all shop orders. These two filters work together to filter shop orders by group
			 * for RTC Managers.
			 */
			add_filter( 'groups_post_access_posts_where_apply', [ self::class, 'apply_default_order_list_filter_by_group_membership' ], 10, 3 );
			add_filter( 'groups_post_access_posts_where', [ self::class, 'filter_order_list_for_regional_training_centre_managers' ], 10, 2 );
		}
	}

	public static function enqueue_stylesheet( string $hook ) {
		if ( is_admin() && function_exists( 'get_current_screen' ) ) {
			$screen = get_current_screen();
			if ( 'edit-shop_order' === $screen->id && 'edit.php' === $hook ) {
				$name = sprintf( '%s-table-view', PluginUtils::get_kebab_case_name() );
				wp_enqueue_style(
					$name,
					plugins_url( sprintf( '%s/assets/css/lasntgadmin-orders-table-view.css', PluginUtils::get_kebab_case_name() ) ),
				);
			}
		}
	}

	public static function render_product_column( string $column, int $post_id ): void {
		if ( 'email' === $column ) {
			$order = wc_get_order( $post_id );
			$user  = $order->get_user();
			if ( $user ) {
				echo esc_attr( $user->user_email );
			}
		}
	}
	public static function add_email_column( array $columns ): array {
		$inserted = [
			'email' => 'Email',
		];
		$before   = array_splice( $columns, 0, count( $columns ) - 5 );
		$columns  = $before + $inserted + $columns;
		return $columns;
	}
	public static function modify_columns( array $columns ): array {
		unset( $columns['origin'] );
		return $columns;
	}

	public static function modify_order_bulk_actions( array $actions ): array {
		if ( 'shop_order' === get_post_type() ) {
			unset( $actions['trash'] );
			unset( $actions['mark_processing'] );
			unset( $actions['mark_on-hold'] );
			unset( $actions['mark_completed'] );
		}
		return $actions;
	}

	/**
	 * Order list page, should we apply the default order list filtered by group membership?
	 * Don't apply when role is regional_training_centre_manager.
	 *
	 * @see https://github.com/fioru-software/lasntgadmin-itthinx-groups/blob/master/lib/access/class-groups-post-access.php#L223
	 */
	public static function apply_default_order_list_filter_by_group_membership( bool $apply, string $where, WP_Query $query ) {
		if ( ! is_search() && is_admin() && function_exists( 'get_current_screen' ) && wc_current_user_has_role( 'regional_training_centre_manager' ) && ! isset( $_GET['product_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$screen = get_current_screen();
			if ( ! is_null( $screen ) ) {
				if ( 'shop_order' === $screen->post_type && 'edit-shop_order' === $screen->id && 'shop_order' === $query->query_vars['post_type'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					$apply = false;
				}
			}
		}
		return $apply;
	}

	/**
	 * @see self::bypass_posts_where_for_regional_training_centre_managers
	 */
	public static function filter_order_list_for_regional_training_centre_managers( string $where, WP_Query $query ) {

		if ( ! is_search() && is_admin() && function_exists( 'get_current_screen' ) && wc_current_user_has_role( 'regional_training_centre_manager' ) && ! isset( $_GET['product_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$screen = get_current_screen();
			if ( ! is_null( $screen ) ) {
				if ( 'shop_order' === $screen->post_type && 'edit-shop_order' === $screen->id && 'shop_order' === $query->query_vars['post_type'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					$where .= GroupUtils::append_to_posts_where(
						'shop_order',
						GroupUtils::get_current_users_group_ids_deep()
					);

					$post_status = $query->get( 'post_status' );
					if ( empty( $post_status ) ) {
						// No filter.
						$where .= sprintf(
							" AND post_status NOT IN ( 'trash' )",
						);
					} else {
						// Filter by clicking post status link.
						$where .= sprintf(
							" AND post_status IN ( '%s' )",
							is_array( $post_status ) ? implode( "','", $post_status ) : esc_sql( $post_status ),
						);
					}
				}
			}//end if
		}//end if
		return $where;
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
			$actions['attendees']      = sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url( admin_url( sprintf( 'edit.php?post_type=attendee&order_id=%d', $post->ID ) ) ),
				esc_html( __( 'Attendees', 'lasntgadmin' ) )
			);
			$actions['enrolment_logs'] = sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url( admin_url( sprintf( 'edit.php?post_type=enrolment_log&order_id=%d', $post->ID ) ) ),
				esc_html( __( 'Enrolment Logs', 'lasntgadmin' ) )
			);
		}

		return $actions;
	}

	public static function handle_filter_query( WP_Query $query ): WP_Query {
		if ( is_admin() && function_exists( 'get_current_screen' ) ) {
			$screen = get_current_screen();
			if ( ! is_null( $screen ) ) {
				if ( 'shop_order' === $screen->post_type && 'edit-shop_order' === $screen->id && 'shop_order' === $query->query_vars['post_type'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					if ( isset( $_GET['attendee_id'] ) && ! empty( $_GET['attendee_id'] ) ) {
						$query = self::handle_filter_by_attendee_id( $query );
					}
				}
			}
		}//end if
		return $query;
	}

	private static function handle_filter_by_attendee_id( WP_Query $query ): WP_Query {
		if ( isset( $_GET['attendee_id'] ) ) {
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

	public static function handle_filter_clauses( array $clauses, WP_Query $query ): array {
		if ( is_admin() && function_exists( 'get_current_screen' ) ) {
			$screen = get_current_screen();
			if ( ! is_null( $screen ) ) {
				if ( 'shop_order' === $screen->post_type && 'edit-shop_order' === $screen->id && isset( $_GET['post_type'] ) && 'shop_order' === $_GET['post_type'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					$clauses = self::handle_filter_by_product_id( $clauses, $query );
				}
			}
		}
		return $clauses;
	}

	private static function handle_filter_by_product_id( array $clauses, WP_Query $query ): array {
		if ( isset( $_GET['product_id'] ) ) {
			$product_id        = absint( $_GET['product_id'] ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$clauses['join']  .= ' INNER JOIN wp_woocommerce_order_items ON wp_posts.ID = wp_woocommerce_order_items.order_id';
			$clauses['join']  .= ' INNER JOIN wp_woocommerce_order_itemmeta ON wp_woocommerce_order_items.order_item_id = wp_woocommerce_order_itemmeta.order_item_id';
			$clauses['where'] .= " AND wp_woocommerce_order_itemmeta.meta_key = '_product_id' AND wp_woocommerce_order_itemmeta.meta_value = $product_id";
		}
		return $clauses;
	}
}
