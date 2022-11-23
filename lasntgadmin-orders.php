<?php
/**
 * Plugin Name:       LASNTG Orders Plugin
 * Plugin URI:        https://github.com/fioru-software/lasntgadmin-orders
 * Description:       An example plugin.
 * Version:           0.0.1
 * Requires PHP:      7.2
 * Text Domain:       lasntgadmin
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) || exit;

require_once getenv('COMPOSER_AUTOLOAD_FILEPATH');

use Lasntg\Admin\PaymentGateway\GrantFunded\GroupApi;
use Lasntg\Admin\Order\Example;

error_log("==== GROUPS =====");
error_log(print_r(GroupApi::get(), true));

error_log("==== EXAMPLE =====");
error_log(print_r(Example::get_instance(), true));

