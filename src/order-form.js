
import { useState, useEffect } from '@wordpress/element';
import { Spinner, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import { isNil, isNull, isUndefined } from "lodash";

import { ProductPanel } from './product-panel';
import { StatusSelector } from './status-selector';
import { isExistingOrder, getLineItemByProductId } from './order-utils';

/**
 * @param { string } nonce
 * @param { string } groupApiPath
 * @param { string } orderApiPath
 * @param { string } productApiPath
 * @param { string } title 
 * @param { string } status
 * @param { object } order
 * @param { number } orderId
 * @param { number } productId
 * @param { number } userId
 * @param { object } user
 * @param { object } userMeta
 * @param { string } currency
 */
const OrderForm = props => {

  const [ notice, setNotice ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [ status, setStatus ] = useState("");
  const [ buttonText, setButtonText ] = useState("Create the order");

  /**
   * Set initial button text
   */
  useEffect( () => {
    if( ! isNil( props?.status ) ) {
      setStatus(props.status);
      if(props.status !== 'auto-draft') {
        setButtonText('Update the order');
      }
    }
  }, [props?.status]);

  /**
   * Change button text
   */
  useEffect( () => {
    if( status === 'waiting-list' ) {
      setButtonText("Add order to waiting list");
    } else {
      if(props?.status === 'auto-draft') {
        setButtonText("Create the order");
      } else {
        setButtonText("Update the order");
      }
    }
  }, [ status ]);

  function parseFormData(formData) {
    const body = {
      billing: {},
      shipping: {},
      currency: formData.get('currency'),
      customer_id: formData.get('customer_id'),
      status: formData.get('order_status') || status || 'attendees',
      meta_data: [
        {
          key: 'groups-read',
          value: formData.get('order_group')
        }
      ],
      line_items: [
        {
          product_id: parseInt( formData.get('product') ),
          quantity: parseInt( formData.get('quantity') )
        }
      ]
    };

    /**
     * When editing an existing order
     * @todo refactor
     */
    if( isExistingOrder(props?.order) ) {
      const lineItem = getLineItemByProductId( body.line_items[0].product_id, props.order);
      body.line_items = [
        {
          ...body.line_items[0],
          ...{
            id: lineItem.id,
            order_id: lineItem.order_id,
            price: parseInt( formData.get('price') ),
            subtotal: `${formData.get('subtotal')}`,
            total: `${formData.get('total')}`
          }
        }
      ];
    }

    return body;

  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = parseFormData(formData);
    const method = props.order.date_created ? 'PUT' : 'POST';
    try {
      setNotice(null);
      setIsLoading(true);
      setIsDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      props.order = await apiFetch( 
        {
          path: props.order.date_created ? `/wc/v3/orders/${ props.order.id }` : `/wc/v3/orders`,
          method,
          data
        } 
      );
      setNotice({
        status: 'success',
        message: 'Updated order. Redirecting to attendees tab...'
      });
      document.location.assign( `/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=attendees&status=${status}` ); 
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }

  return (
    <form class="panel-wrap woocommerce" onSubmit={ handleSubmit } >

      <input type="hidden" name="email" value={ props.order.billing.email || props.user.data.user_email } />
      <input type="hidden" name="currency" value={ props.order.currency || props.currency } />
      <input type="hidden" name="customer_id" value={ props.order.customer_id || props.user.ID } />

      <div id="order_data" class="panel woocommerce-order-data">

        <div class="form-wrap">

          <h3>Order</h3>

          { props.status !== 'auto-draft' &&
            <div class="form-field">
              <fieldset>
                <p class="form-row">
                  <label for="order_status">Status<span class="required"> *</span></label>
                  <StatusSelector id="order_status" name="order_status" user={ props?.user } order={ props?.order } status={ status } setStatus={ setStatus } apiPath={ props.orderApiPath} nonce={ props.nonce } />
                </p>
              </fieldset>
            </div>
          }
          
          <ProductPanel productId={ props?.order?.line_items[0]?.product_id || props.productId } nonce={ props.nonce } setIsDisabled={ setIsDisabled } groupApiPath={ props.groupApiPath } productApiPath={ props.productApiPath } order={ props.order } setStatus={ setStatus } />

        </div>


        <div class="form-wrap">
          <div class="form-field">
          { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
          <button disabled={ isDisabled } type="submit" class="button save_order wp-element-button" name="save" value="Create">{ buttonText }</button>
          { isLoading && <Spinner/> }
          </div>
        </div>
      </div>

    </form>

  );
}

export { OrderForm };
