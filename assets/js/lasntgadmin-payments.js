
jQuery(document).ready(function ($) {

    let hidden = [];

    enableRadios();

    /**
     * Show payment method inputs when clicked
     */
    $('input[name=payment_method]').click( e => {
        const id = e.target.id;
        enableSubmit();
        $('div.payment_box').hide();
        $(`div.payment_box.${id}`).show();
    });

    function disableRadios() {
        $('ul.payment_methods input[type=radio]').attr('disabled', true);
    }
    function enableRadios() {
        $('ul.payment_methods input[type=radio]').removeAttr('disabled');
    }

    function enableSubmit() {
        $('button#place_order').removeAttr('disabled');
    }

    function disableSubmit() {
        $('button#place_order').attr('disabled', true);
    }

    function disableInputs() {
        disableRadios();
        disableSubmit();
    }

    function enableInputs() {
        enableRadios();
        enableSubmit();
    }

    /**
     * Form submit
     *
     * POST
     * URL: http://localhost:8080/checkout/order-pay/13/?pay_for_order=true&key=wc_order_eShR9n8HpfRoB
     * BODY: payment_method=woocommerce_gateway_purchase_order&po_number_field=12345&woocommerce_pay=1&woocommerce-pay-nonce=179d33f984&_wp_http_referer=%2Fcheckout%2Forder-pay%2F13%2F%3Fpay_for_order%3Dtrue%26key%3Dwc_order_eShR9n8HpfRoB
     *
     * GET
     * URL: http://localhost:8080/checkout/order-received/13/?key=wc_order_eShR9n8HpfRoB
     */
    $('form#post').submit( async e => {
        e.preventDefault();

        const formData = new FormData( e.target );
        disableInputs();

        // readd removed elements
        $.each( hidden, ( index, el ) => {
            const name = startsWith( 'payment_method_', $(el).get(0).classList.values() );
            document.querySelector(`li.${name}`).append( el );
        } );

        const action = $('div#order_data').data('action');
        const res = await fetch( action, {
            method: 'POST',
            body: formData
        } );
        if( res.ok && res.redirected ) {
            alert('paid');
        } else {
            alert('not paid');
        }
        enableInputs();

    });

    function startsWith( needle, haystack ) {
        const regex = new RegExp(`^${needle}[\\w]+$`);
        return Array.from(haystack).find( item => regex.test(item) );
    }

    $("button#place_order").click( async e => {
        hidden = $('div.payment_box:hidden');
        hidden.remove();
    });

});
