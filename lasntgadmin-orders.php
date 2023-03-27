<?php
/**
 * Plugin Name:       LASNTG Orders
 * Plugin URI:        https://github.com/fioru-software/lasntgadmin-orders
 * Description:       Orders plugin
 * Version:           1.5.0-rc2
 * Requires PHP:      7.2
 * Text Domain:       lasntgadmin
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) || exit;

require_once getenv( 'COMPOSER_AUTOLOAD_FILEPATH' );

use Lasntg\Admin\Orders\{ PageUtils, PluginUtils, OrderUtils, WaitingListActionsFilters };

PageUtils::init();
OrderUtils::init();
WaitingListActionsFilters::init();

/**
 * Plugin activation
 */
register_activation_hook( __FILE__, [ PluginUtils::class, 'activate' ] );

/**
 * Plugin deactivation
 */
register_deactivation_hook( __FILE__, [ PluginUtils::class, 'deactivate' ] );
