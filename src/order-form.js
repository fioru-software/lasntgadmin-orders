
import { useState, useEffect } from '@wordpress/element';
import { Spinner, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

import { isNil, isNull, isUndefined } from "lodash";

import { ProductPanel } from './product-panel';
import { StatusSelector } from './status-selector';
import { isPendingStatus, isDraftStatus, isWaitingStatus, isExistingOrder, getLineItemByProductId, getWaitingStatus, getPendingStatus, getDraftStatus, getAttendeesStatus } from './order-utils';

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
  const [ isSubmitButtonDisabled, setSubmitButtonDisabled ] = useState(true);
  const [ status, setStatus ] = useState("");
  const [ buttonText, setButtonText ] = useState("Create enrolment");
  const oldStatus = props.order.status;



  useEffect( () => {
  }, [ props?.order ]);

  /**
   * Set initial button text
   */
  useEffect( () => {
    if( ! isNil( props?.status ) ) {
      setStatus(props.status);
      if( ! isDraftStatus( props.status ) ) {
        setButtonText( __( 'Update enrolment', 'lasntgadmin' ));
      }
    }
  }, [props?.status]);

  /**
   * Change button text
   */
  useEffect( () => {
    if( isWaitingStatus( status ) ) {
      setButtonText( __( 'Add enrolment to waiting list', 'lasntgadmin' ));
    } else {
      if( isDraftStatus( props?.status ) ) {
        setButtonText( __( 'Create enrolment', 'lasntgadmin' ) );
      } else {
        setButtonText( __( 'Update enrolment', 'lasntgadmin' ) );
      }
    }
  }, [ status ]);

  function determineStatus() {
    if( isDraftStatus( status ) ) {
      return getAttendeesStatus();
    }
    if( isWaitingStatus( status ) ) {
      return getWaitingStatus();
    }
    return status;
  }

  function parseFormData(formData) {
    const body = {
      billing: {},
      shipping: {},
      currency: formData.get('currency'),
      customer_id: formData.get('customer_id'),
      status: determineStatus(),
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
    const method = isExistingOrder( props.order ) ? 'PUT' : 'POST';
    try {
      setNotice(null);
      setIsLoading(true);
      setSubmitButtonDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      props.order = await apiFetch( 
        {
          path: isExistingOrder( props.order ) ? `/wc/v3/orders/${ props.order.id }` : `/wc/v3/orders`,
          method,
          data
        } 
      );
      setNotice({
        status: 'success',
        message: __( 'Updated enrolment. Redirecting to attendees tab...', 'lasntgadmin' )
      });
      
      // if the order is being moved from waiting-list to pending 
      if ( isWaitingStatus( oldStatus ) && isPendingStatus( status ) ) {
        setNotice({
          status: 'success',
          message: __( 'Updated enrolment. Client will be notified.', 'lasntgadmin' )
        });
        setIsLoading(false);
      } else {
        setNotice({
          status: 'success',
          message: __( 'Updated enrolment. Redirecting...', 'lastngadmin' )
        });
      }

      switch( props.order.status ) {

        case getWaitingStatus():
          document.location.assign(`/wp-admin/edit.php?post_type=shop_order`);
          break;

        case getAttendeesStatus():
          document.location.assign(`/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=attendees`);
          break;

        case getPendingStatus():
          document.location.assign(`/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=payment`);
          break;

        default:
          document.location.reload();

      }
      
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setSubmitButtonDisabled(false);
    }
  }
  
  return (
    <form class="panel-wrap woocommerce" onSubmit={ handleSubmit } >

      <input type="hidden" name="email" value={ props.order.billing.email || props.user.data.user_email } />
      <input type="hidden" name="currency" value={ props.order.currency || props.currency } />
      <input type="hidden" name="customer_id" value={ props.order.customer_id || props.user.ID } />

      <div id="order_data" class="panel woocommerce-order-data">

        <div class="form-wrap">

          <h3>{ __( 'Enrolment', 'lasntgadmin' ) }</h3>

          { ! isDraftStatus( props.status ) && 
            <div class="form-field">
              <fieldset>
                <p class="form-row">
                  <label for="order_status">{ __( 'Status', 'lasntgadmin' ) }<span class="required"> *</span></label>
                  <StatusSelector id="order_status" disabled={ isSubmitButtonDisabled } name="order_status" user={ props?.user } order={ props?.order } status={ status } setStatus={ setStatus } apiPath={ props.orderApiPath} nonce={ props.nonce } />
                </p>
              </fieldset>
            </div>
          }
          
          <ProductPanel max={ 12 } productId={ props?.order?.line_items[0]?.product_id || props.productId } nonce={ props.nonce } setSubmitButtonDisabled={ setSubmitButtonDisabled } groupApiPath={ props.groupApiPath } productApiPath={ props.productApiPath } order={ props.order } setStatus={ setStatus } user={ props?.user } />

        </div>


        <div class="form-wrap">
          <div class="form-field">
          { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
          <button disabled={ isSubmitButtonDisabled } type="submit" class="button save_order wp-element-button button-primary" name="save" value="Create">{ buttonText }</button>
          { isLoading && <Spinner/> }
          </div>
        </div>
      </div>

    </form>

  );
}

export { OrderForm };
