<?php

namespace Lasntg\Admin\Orders;

use WC_Order;

/**
 * Haven't proven that this is required yet.
 * The order lock prevents two payments from being processed simultaneously.
 */
class OrderLock {

	const META_KEY = '_order_lock';

	public static function is_locked( WC_Order $order ): bool {
		$result = false;
		if ( $order->meta_exists( self::META_KEY ) ) {
			$result = $order->get_meta( self::META_KEY, true );
		}
		return $result;
	}

	public static function lock( WC_Order $order ): void {
		if ( $order->meta_exists( self::META_KEY ) ) {
			$order->update_meta_data( self::META_KEY, true );
		} else {
			$order->add_meta_data( self::META_KEY, true, true );
		}
		$order->save_meta_data();
	}

	public static function unlock( WC_Order $order ): void {
		if ( $order->meta_exists( self::META_KEY ) ) {
			$order->update_meta_data( self::META_KEY, false );
		} else {
			$order->add_meta_data( self::META_KEY, false, true );
		}
		$order->save_meta_data();
	}
}
