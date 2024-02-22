<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\{ Capabilities };

/**
 * Plugin utilities
 */
class PluginUtils {

	public static function activate() {
		Capabilities::add();
	}

	public static function deactivate() {
		Capabilities::remove();
	}

	private static function get_data(): array {
		return get_plugin_data(
			sprintf(
				'%s/wp-content/plugins/%s/%s.php',
				rtrim( ABSPATH, '/' ),
				self::get_kebab_case_name(),
				self::get_kebab_case_name()
			)
		);
	}

	public static function get_version(): string {
		$data = self::get_data();
		return $data['Version'];
	}

	public static function get_camel_case_name(): string {
		return 'lasntgadmin_orders';
	}

	public static function get_kebab_case_name(): string {
		return 'lasntgadmin-orders';
	}

	public static function get_absolute_plugin_path(): string {
		return sprintf( '/var/www/html/wp-content/plugins/%s', self::get_kebab_case_name() );
	}

	public static function get_absolute_plugin_filepath(): string {
		return sprintf( '%s/%s.php', self::get_absolute_plugin_path(), self::get_kebab_case_name() );
	}
}
