<?php

namespace Lasntg\Admin\Orders;

/**
 * Plugin capabilities assigned to roles
 */
class Capabilities {

	/**
	 * Admin capabilities
	 */
	public static function get_administrator_capabilities(): array {
		return array(
			'read',
			'view_admin_dashboard',
			'edit_posts',
			'read_shop_order',
			'publish_shop_orders',
			'edit_shop_orders',
			'edit_shop_order',
			'edit_published_shop_orders',
			'delete_shop_orders',
			'edit_others_shop_orders',
			'delete_published_shop_orders',
			'delete_shop_order',
			'delete_others_shop_orders',
			'view_others_shop_orders',
		);
	}

	/**
	 * National manager capabilities
	 */
	public static function get_national_manager_capabilities(): array {
		return array(
			'read',
			'view_admin_dashboard',
			'read_shop_order',
			'publish_shop_orders',
			'edit_shop_orders',
			'edit_shop_order',
			'edit_published_shop_orders',
			'edit_others_shop_orders',
			'view_others_shop_orders',
		);
	}

	/**
	 * Regional training officer capabilities
	 */
	public static function get_regional_training_centre_manager_capabilities(): array {
		return [
			'read',
			'view_admin_dashboard',
			'read_shop_order',
			'publish_shop_orders',
			'edit_shop_orders',
			'edit_shop_order',
			'edit_published_shop_orders',
			'edit_others_shop_orders',
			'view_others_shop_orders',
		];
	}

	/**
	 * Training officer capabilities
	 */
	public static function get_training_officer_capabilities(): array {
		return [
			'read',
			'view_admin_dashboard',
			'read_shop_order',
			'edit_shop_orders',
			'edit_shop_order',
			'edit_published_shop_orders',
			'publish_shop_orders',
		];
	}

	/**
	 * Fire training officer capabilities
	 */
	public static function get_fire_training_officer_capabilities(): array {
		return [
			'read',
			'view_admin_dashboard',
			'edit_posts',
			'read_shop_order',
			'publish_shop_orders',
			'edit_shop_orders',
			'edit_shop_order',
			'edit_published_shop_orders',
			'edit_others_shop_orders',
		];
	}

	public static function add(): void {
		$role = get_role( 'administrator' );
		$caps = self::get_administrator_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->add_cap( $cap );
			}
		);

		$role = get_role( 'national_manager' );
		$caps = self::get_national_manager_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->add_cap( $cap );
			}
		);

		$role = get_role( 'regional_training_centre_manager' );
		$caps = self::get_regional_training_centre_manager_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->add_cap( $cap );
			}
		);

		$role = get_role( 'training_officer' );
		$caps = self::get_training_officer_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->add_cap( $cap );
			}
		);

		$role = get_role( 'fire_training_officer' );
		$caps = self::get_fire_training_officer_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->add_cap( $cap );
			}
		);
	}

	public static function remove(): void {
		$role = get_role( 'administrator' );
		$caps = self::get_administrator_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->remove_cap( $cap );
			}
		);

		$role = get_role( 'national_manager' );
		$caps = self::get_national_manager_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->remove_cap( $cap );
			}
		);

		$role = get_role( 'regional_training_centre_manager' );
		$caps = self::get_regional_training_centre_manager_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->remove_cap( $cap );
			}
		);

		$role = get_role( 'training_officer' );
		$caps = self::get_training_officer_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->remove_cap( $cap );
			}
		);

		$role = get_role( 'fire_training_officer' );
		$caps = self::get_fire_training_officer_capabilities();
		array_walk(
			$caps,
			function( $cap ) use ( $role ) {
				$role->remove_cap( $cap );
			}
		);
	}
}
