
import { useContext, useState, useEffect } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ProductContext, OrderContext, AttendeeContext } from './attendee-context';
import { isCourseClosed } from '../product-utils';
import apiFetch from '@wordpress/api-fetch';

import { 
  getUpdateShopOrderRequest, 
  getUpdateOrderRequest, 
  filterOrderMetaByKey, 
  filterAttendeeIdFromOrderMeta,
  isPaidStatus, 
  isGrantPaid, 
  isPurchaseOrderPaid, 
  isAttendeeIdInOrderMeta
} from '../order-utils';

import { isNil } from 'lodash';
import { 
  filterOrderIdFromAttendeeMeta,
  filterProductIdFromAttendeeMeta,
  isProductIdInAttendeeMeta,
  isOrderIdInAttendeeMeta, 
  getUpdateAttendeeBatchRequest 
} from './attendee-utils';


/**
 * Decides which actions are available per attendee.
 * Product statuses open_for_enrollment
 */
const AttendeeFormFieldsetButtons = props => {

  const nonce = props.nonce;
  const quantity = props.quantity;

  const product = useContext( ProductContext );
  const attendee = useContext( AttendeeContext );
  const order = useContext( OrderContext );

  const [ isLoading, setIsLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);

  /**
   * @todo remove this function
   */
  useEffect( () => {
    if( !isNil( attendee ) ) {
      console.log('attendee', attendee);
    }
  }, [ attendee ]);

  /**
   * Reset button is disabled when the course has a status considered to be closed
   */
  function isResetButtonDisabled() {
    return isCourseClosed( product.status ) || isNil( attendee ) || isLoading ;
  }

  /**
   * Remove button is disabled 
   * when the course has a status considered to be closed 
   * or payment method is not grant and purchase order
   */
  function isRemoveButtonDisabled() {
    return isCourseClosed( product.status ) || isLoading || quantity < 2 || ( order.payment_method !== "" && ! isGrantPaid( order.payment_method ) && ! isPurchaseOrderPaid( order.payment_method ) );
  }

  function handleResetAttendee( e ) {
    e.preventDefault();
    props.setAttendee(null);
  }

  async function handleRemoveAttendee( e ) {

    e.preventDefault();

    try {

      setIsLoading(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      /**
       * When existing attendee
       */
      if( 'ID' in attendee ) {

        /**
         * When order in attendee meta
         * then remove order from attendee's meta.
         */
        if( isOrderIdInAttendeeMeta( order.id, attendee.meta ) ) {

          setNotice({
            status: 'info',
            message: 'Removing order from attendee meta...'
          });

          const removeOrderFromAttendeeRequest = getUpdateAttendeeBatchRequest(
            order.id,
            attendee.ID,
            nonce,
            {
              meta: {
                order_ids: filterOrderIdFromAttendeeMeta( order.id, attendee.meta )
              }
            }
          );

          const removeOrderFromAttendeeResponse = await apiFetch(
            removeOrderFromAttendeeRequest
          );

          setNotice({
            status: 'success',
            message: 'Removed order form attendee meta.'
          });
        }

        /**
         * When product in attendee meta
         * then remove product from attendee's meta.
         */
        if( isProductIdInAttendeeMeta( order.id, attendee.meta ) ) {

          setNotice({
            status: 'info',
            message: 'Removing product from attendee meta...'
          });

          const removeProductFromAttendeeRequest = getUpdateAttendeeBatchRequest(
            order.id,
            attendee.ID,
            nonce,
            {
              meta: {
                product_ids: filterProductIdFromAttendeeMeta( product.id, attendee.meta )
              }
            }
          );

          const removeProductFromAttendeeResponse = await apiFetch(
            removeProductFromAttendeeRequest
          );

          setNotice({
            status: 'success',
            message: 'Removed product form attendee meta.'
          });
        }


        /**
         * When attendee in order order
         * then remove attendee from order's meta.
         */
        if( isAttendeeIdInOrderMeta( attendee.ID, order.meta_data ) ) {

          setNotice({
            status: 'info',
            message: 'Removing attendee from order meta...'
          });

          const removeAttendeeFromOrderRequest = getUpdateShopOrderRequest(
            order.id,
            nonce,
            {
              meta: {
                attendee_ids: filterAttendeeIdFromOrderMeta( attendee.ID, order.meta_data )
              }
            }
          );

          const removeAttendeeFromOrderResponse = await apiFetch(
            removeAttendeeFromOrderRequest
          );

          setNotice({
            status: 'success',
            message: 'Removed attendee from order meta.'
          });

        }

      }

      /**
       * Decrementing order quantity.
       */
      setNotice({
        status: 'info',
        message: 'Decrementing order quantity...'
      });

      const decrementOrderQuantityRequest = getUpdateOrderRequest(
        order.id,
        nonce,
        {
          total: order.total - product.price,
          line_items: Array.isArray( order?.line_items ) ? order?.line_items.map( item => {
            return {
              id: item.id,
              quantity: item.quantity - 1,
              total: `${item.total - product.price}`,
              subtotal: `${item.subtotal - product.price}`
            };
          }) : [],
        }
      );

      const orderRes = await apiFetch(
        decrementOrderQuantityRequest
      );

      setNotice({
        status: 'success',
        message: 'Decremented order quantity. Reloading page...'
      });

      document.location.reload();

    } catch (e) {
      console.error(e);
      setNotice({
        status: 'error',
        message: e.message
      });
      setIsLoading(false);
    }
  }

  return (
    <>
      <div class="form-field">
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <button class="button alt save_order wp-element-button" onClick={ handleResetAttendee } disabled={ isResetButtonDisabled() } >{ __( 'Reset Attendee', 'lasntgadmin' ) }</button>&nbsp;
        <button class="button alt save_order wp-element-button" onClick={ handleRemoveAttendee } disabled={ isRemoveButtonDisabled() } >{ __( 'Remove Attendee', 'lasntgadmin' ) }</button>
        { isLoading && <Spinner/> }
      </div>
    </>
  );
}

export {
  AttendeeFormFieldsetButtons
};
