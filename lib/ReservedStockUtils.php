<?php namespace Lasntg\Admin\Orders;

use WC_Order;
use Lasntg\Admin\Orders\ReservedStockRow;

/**
 * @see woocommerce/src/Checkout/Helpers/ReserveStock.php
 * @see woocommerce/includes/wc-stock-functions.php
 */
class ReservedStockUtils {

	public static function get_stock_reserved_for_order( WC_Order $order ): int {
		global $wpdb;

		return (int) $wpdb->get_var(
			$wpdb->prepare(
				"SELECT stock_quantity FROM $wpdb->wc_reserved_stock WHERE expires > NOW() AND order_id = %d",
				$order->get_id()
			)
		);
	}
}
