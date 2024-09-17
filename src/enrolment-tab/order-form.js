
import { useState, useEffect } from '@wordpress/element';
import { Spinner, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

import { isNil } from "lodash";

import { ProductPanel } from './product-panel';
import { StatusSelector } from './status-selector';
import { isPendingPaymentStatus, isDraftStatus, isWaitingStatus, isExistingOrder, getLineItemByProductId, getWaitingStatus, getPendingPaymentStatus, getDraftStatus, getPendingAttendeesStatus } from '../order-utils';

/**
 * @param { string } nonce
 * @param { string } groupApiPath
 * @param { string } orderApiPath
 * @param { string } productApiPath
 * @param { string } title 
 * @param { object } order
 * @param { number } productId
 * @param { object } user
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
  
  function canUserEdit() {
    return ['attendees', 'waiting-list'].includes( props.order.status ) && props?.user.ID === props.order.customer_id;
  }

  function determineStatus() {
    if( isDraftStatus( status ) ) {
      return getPendingAttendeesStatus();
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
    if( ! isExistingOrder( props?.order ) ) {
      body.line_items = [
        {
          product_id: parseInt( formData.get('product') ),
          quantity: parseInt( formData.get('quantity') )
        }
      ];
    }

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
      const order = await apiFetch( 
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
      if ( isWaitingStatus( oldStatus ) && isPendingPaymentStatus( status ) ) {
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

      switch( order.status ) {

        case getWaitingStatus():
          document.location.assign(`/wp-admin/edit.php?post_type=shop_order`);
          break;

        case getPendingAttendeesStatus():
          document.location.assign(`/wp-admin/post.php?post=${ order.id }&action=edit&tab=attendees`);
          break;

        case getPendingPaymentStatus():
          document.location.assign(`/wp-admin/post.php?post=${ order.id }&action=edit&tab=payment`);
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
    <form className="panel-wrap woocommerce" onSubmit={ handleSubmit } >

      <input type="hidden" name="email" value={ props.order.billing.email || props.user.data.user_email } />
      <input type="hidden" name="currency" value={ props.order.currency || props.currency } />
      <input type="hidden" name="customer_id" value={ props.order.customer_id || props.user.ID } />

      <div id="order_data" className="panel woocommerce-order-data">

        <div className="form-wrap">

          <ProductPanel max={ 20 } productId={ props?.order?.line_items[0]?.product_id || props.productId } nonce={ props.nonce } setSubmitButtonDisabled={ setSubmitButtonDisabled } orderApiPath={ props.orderApiPath } groupApiPath={ props.groupApiPath } productApiPath={ props.productApiPath } order={ props.order } setStatus={ setStatus } user={ props?.user } status={ status }/>

        </div>


        <div className="form-wrap">
          <div className="form-field">
          { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
          <button disabled={ isSubmitButtonDisabled } type="submit" className="button save_order wp-element-button button-primary" name="save" value="Create">{ buttonText }</button>
          { isLoading && <Spinner/> }
          </div>
        </div>
      </div>

    </form>

  );
}

export { OrderForm };
