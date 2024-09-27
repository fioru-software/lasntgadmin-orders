<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Orders\PluginUtils;
use Lasntg\Admin\Products\ProductUtils;
use Lasntg\Admin\Group\GroupUtils;

use Lasntg\Admin\PaymentGateway\GrantFunded\{
	PluginUtils as GrantFundedPluginUtils
};

use WC_Payment_Gateway, WC_Payment_Gateways, WC_Product, WC_Order;
use Groups_Admin_Post_Columns;

class PaymentUtils {

	const TRANSIENT_NAME          = 'lasntgadmin_orders_payment_result_transient';
	const SUPPORTED_GATEWAY_SLUGS = [
		'woocommerce_gateway_purchase_order',
		'lasntgadmin_grant_funded_payment_gateway',
	];

	public static function save_notices( array $notices ) {
		if ( $notices ) {
			set_transient( sprintf( '%s_for_user_%d', self::TRANSIENT_NAME, get_current_user_id() ), $notices, 30 );
		}
	}

	public static function get_notices() {
		return get_transient( sprintf( '%s_for_user_%d', self::TRANSIENT_NAME, get_current_user_id() ) );
	}

	public static function delete_notices() {
		delete_transient( sprintf( '%s_for_user_%d', self::TRANSIENT_NAME, get_current_user_id() ) );
	}

	public static function get_payment_gateway_by_id( string $gateway_id ): WC_Payment_Gateway {
		$payment_gateways = ( WC_Payment_Gateways::instance() )->get_available_payment_gateways();
		return $payment_gateways[ $gateway_id ];
	}

	public static function get_supported_admin_payment_gateways( WC_Product $product, WC_Order $order ): array {
		return array_filter(
			( WC_Payment_Gateways::instance() )->get_available_payment_gateways(),
			function ( $gateway ) use ( $product, $order ) {
				if ( in_array( $gateway->id, self::SUPPORTED_GATEWAY_SLUGS ) ) {
					if ( GrantFundedPluginUtils::get_snake_case_name() === $gateway->id ) {
						$group_id = $order->get_meta( Groups_Admin_Post_Columns::GROUPS_READ, true );
						$group    = GroupUtils::get_group_by_id( $group_id );
						return ProductUtils::is_funded( $product ) && GroupUtils::is_local_authority( $group );
					}
					return true;
				}
			}
		);
	}

	public static function render_gateway( WC_Payment_Gateway $gateway ) {
		?>
		<li class="wc_payment_method payment_method_<?php echo esc_attr( $gateway->id ); ?>">

		<input id="payment_method_<?php echo esc_attr( $gateway->id ); ?>" type="radio" class="input-radio" name="payment_method" value="<?php echo esc_attr( $gateway->id ); ?>" <?php checked( $gateway->chosen, true ); ?> data-order_button_text="<?php echo esc_attr( $gateway->order_button_text ); ?>" required disabled />

		<label for="payment_method_<?php echo esc_attr( $gateway->id ); ?>">
			<?php echo wp_kses( $gateway->get_title(), 'post' ); ?> <?php echo wp_kses( $gateway->get_icon(), 'post' ); ?>
		</label>

		<?php if ( $gateway->has_fields() || $gateway->get_description() ) : ?>
		<div class="payment_box payment_method_<?php echo esc_attr( $gateway->id ); ?> form-field" <?php if ( ! $gateway->chosen ) : ?>	style="display:none;"<?php endif; ?>><?php $gateway->payment_fields(); // phpcs:ignore Squiz.ControlStructures.ControlSignature.NewlineAfterOpenBrace ?>
		</div>
		<?php endif; ?>

		</li>
		<hr/>

		<?php
	}
}
