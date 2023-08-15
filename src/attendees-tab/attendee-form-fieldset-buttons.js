
import { useContext, useState, useEffect } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ProductContext, OrderContext, AttendeeContext } from './attendee-context';
import { isCourseClosed } from '../product-utils';

import { 
  getUpdateShopOrderRequest, getUpdateOrderRequest, filterOrderMetaByKey, 
  isPaidStatus, isGrantPaid, isPurchaseOrderPaid, isAttendeeIdInOrderMeta
} from '../order-utils';

import { isNil } from 'lodash';
import { getUpdateAttendeeBatchRequest } from './attendee-form-utils';

/**
 * Decides which actions are available per attendee.
 * Product statuses open_for_enrollment
 */
const AttendeeFormFieldsetButtons = props => {

  const nonce = props.nonce;

  const product = useContext( ProductContext );
  const attendee = useContext( AttendeeContext );
  const order = useContext( OrderContext );

  const [ isLoading, setIsLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);

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
    return isCourseClosed( product.status ) || isLoading || ( order.payment_method !== "" && ! isGrantPaid( order.payment_method ) && ! isPurchaseOrderPaid( order.payment_method ) );
  }

  function handleResetAttendee( e ) {
    e.preventDefault();
    props.setAttendee(null);
  }

  function handleRemoveAttendee( e ) {

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

          const updateAttendeeRequest = getUpdateAttendeeBatchRequest(
            order.id,
            attendee.ID,
            nonce,
            {
              meta: {
                product_ids: Array.isArray( attendee?.meta?.product_ids ) ? [ ... new Set(
                  attendee?.meta?.product_ids.map(Number).filter(Number).filter( productId => productId !== parseInt( product.id ) )
                )] : [],
                order_ids: Array.isArray( attendee?.meta?.order_ids) ? [ ... new Set(
                  attendee?.meta?.order_ids.map(Number).filter(Number).filter( orderId => orderId !== parseInt( order.id ) )
                )] : []
              }
            }
          );
          const updateAttendeeRes = await apiFetch(
            updateAttendeeRequest
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

          const updateShopOrderRequest = getUpdateShopOrderRequest(
            order.id,
            nonce,
            {
              meta: {
                attendee_ids: Array.isArray( order.meta_data ) ? [ 
                  ... new Set(
                    findOrderMetaByKey('attendee_ids', order.meta_data ).filter( attendeeId => attendeeId !== parseInt( attendee.ID ) )
                  )
                ] : []
              }
            }
          );

          const shopOrderRes = await apiFetch(
            updateShopOrderRequest
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

      const updateOrderRequest = getUpdateOrderRequest(
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
        updateOrderRequest
      );

      setNotice({
        status: 'success',
        message: 'Decremented order quantity.'
      });

      setNotice({
        status: 'info',
        message: 'Reloading page...'
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
