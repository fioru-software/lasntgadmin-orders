<div class="form-field">
	<fieldset>
		<p class="form-row">
			<label for="payment_method">Payment Method</label>
			<input disabled id="payment_method" type="text" value="<?php echo esc_html( $order->get_payment_method_title() ); ?>">
		</p>
	</fieldset>
</div>

<?php if ( $order->get_transaction_id() ) : ?>
<div class="form-field">
	<fieldset>
		<p class="form-row">
			<label for="payment_transaction_id">Transaction ID</label>
			<input disabled id="payment_transaction_id" type="text" value="<?php echo esc_html( $order->get_transaction_id() ); ?>">
		</p>
	</fieldset>
</div>
<?php endif ?>

<?php if ( $order->get_meta( 'funding_source' ) ) : ?>
<div class="form-field">
	<fieldset>
		<p class="form-row">
			<label for="payment_funding_source">Funding Source</label>
			<input disabled id="funding_source" type="text" value="<?php echo esc_html( $order->get_meta( 'funding_source' ) ); ?>">
		</p>
	</fieldset>
</div>
<?php endif ?>

<div class="form-field">
	<fieldset>
		<p class="form-row">
			<label for="payment_amount">Total</label>
			<input disabled id="payment_amount" type="text" value="<?php echo esc_html( sprintf( '%s %f', $order->get_currency(), number_format( $order->get_total(), 2 ) ) ); ?>">
		</p>
	</fieldset>
</div>

<div class="form-field">
	<fieldset>
		<p class="form-row">
			<label for="payment_date">Payment Date</label>
			<input disabled id="payment_date" type="text" value="<?php echo esc_html( datefmt_format( datefmt_create( 'en_IE', IntlDateFormatter::SHORT, IntlDateFormatter::NONE ), date_create_from_format( DATE_W3C, $order->get_date_paid() ) ) ); ?>">
		</p>
	</fieldset>
</div>

