
import { useContext, useState, useEffect } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ProductContext, OrderContext, AttendeeContext } from './attendee-context';
import { isCourseClosed } from '../product-utils';
import apiFetch from '@wordpress/api-fetch';
import { isNil } from 'lodash';

import { 
  getRemoveAttendeeFromShopOrderRequest,
  getUpdateShopOrderRequest, 
  getUpdateOrderRequest, 
  filterOrderMetaByKey, 
  filterAttendeeIdFromOrderMeta,
  isPaidStatus, 
  isGrantPaid, 
  isPurchaseOrderPaid, 
  isAttendeeIdInOrderMeta
} from '../order-utils';

import { 
  filterOrderIdFromAttendeeMeta,
  filterProductIdFromAttendeeMeta,
  isProductIdInAttendeeMeta,
  isOrderIdInAttendeeMeta, 
  getUpdateAttendeeRequest  
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

  const [ isLoading, setLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);
  const [ isRemovable, setRemovable ] = useState();
  const [ isResetable, setResetable ] = useState();
  const [ attendeeId, setAttendeeId ] = useState(); // attendee.id || attendeeId

  useEffect( () => {
    if( ! isNil( attendee ) ) {
      if( 'ID' in attendee ) {
        setAttendeeId( parseInt( attendee.ID ) );
      }
      if( 'id' in attendee ) {
        setAttendeeId( parseInt( attendee.id ) );
      }
    }
  }, [ attendee ]);

  useEffect( () => {
    setResetable( isResetButtonDisabled() );
  }, [ product.status, attendee, isLoading ]);

  useEffect( () => {
    setRemovable( isRemoveButtonDisabled() );
  }, [ product.status, order.payment_method, isLoading ]);

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

  /**
   * When product in attendee meta
   * then remove product from attendee's meta.
   * @throws Error
   */
  async function removeProductFromAttendee() {

    if( isProductIdInAttendeeMeta( product.id, attendee.meta ) ) {

      setNotice({
        status: 'info',
        message: 'Removing product from attendee meta...'
      });

      const removeProductFromAttendeeRequest = getUpdateAttendeeRequest(
        order.id,
        attendeeId,
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
        message: 'Removed product from attendee meta.'
      });
    }

  }

  /**
   * When order in attendee meta
   * then remove order from attendee's meta.
   * @throws Error
   */
  async function removeOrderFromAttendee() {
    if( isOrderIdInAttendeeMeta( order.id, attendee.meta ) ) {

      setNotice({
        status: 'info',
        message: 'Removing order from attendee meta...'
      });

      const removeOrderFromAttendeeRequest = getUpdateAttendeeRequest(
        order.id,
        attendeeId,
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
        message: 'Removed order from attendee meta.'
      });
    }
  }

  /**
   * When attendee in order order
   * then remove attendee from order's meta.
   * @throws Error
   */
  async function removeAttendeeFromOrder() {
    if( isAttendeeIdInOrderMeta( attendeeId, order.meta_data ) ) {

      setNotice({
        status: 'info',
        message: 'Removing attendee from order meta...'
      });

      const removeAttendeeFromOrderRequest = getRemoveAttendeeFromShopOrderRequest(
        order.id,
        attendeeId,
        nonce,
        {
          meta: {
            attendee_ids: filterAttendeeIdFromOrderMeta( attendeeId, order.meta_data )
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
   * When resetting an attendee for an order 
   * - the product_id and order_id needs to be removed from the attendee being removed
   * - the attendee_id needs to be removed from the order
   * - order quantity is left untouched
   */
  async function handleResetAttendee( e ) {
    e.preventDefault();
    try {

      // @todo remove 
      console.log( 'attendee', attendee );

      setLoading(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      await removeAttendeeFromOrder();
      await removeOrderFromAttendee();
      await removeProductFromAttendee();

      props.setAttendee(null);

      setNotice({
        status: 'success',
        message: 'Reset attendee.'
      });

      setLoading(false);

    } catch (e) {
      console.error(e);
      setNotice({
        status: 'error',
        message: e.message
      });
      setLoading(false);
    }
  }

  /**
   * When removing an attendee for an order 
   * - the product_id and order_id needs to be removed from the attendee being removed
   * - the attendee_id needs to be removed from the order
   * - order quantity is decremented
   */
  async function handleRemoveAttendee( e ) {

    e.preventDefault();

    try {

      setLoading(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      /**
       * When existing attendee
       */
      if( ! isNil( attendee ) && 'ID' in attendee ) {
        await removeAttendeeFromOrder();
        await removeOrderFromAttendee();
        await removeProductFromAttendee();
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
        message: 'Decremented order quantity.'
      });

      setNotice({
        status: 'success',
        message: 'Removed attendee. Reloading page...'
      });

      document.location.reload();

    } catch (e) {
      console.error(e);
      setNotice({
        status: 'error',
        message: e.message
      });
      setLoading(false);
    }
  }

  return (
    <>
      <div class="form-field">
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <button class="button alt save_order wp-element-button" onClick={ handleResetAttendee } disabled={ isResetable } >{ __( 'Reset Attendee', 'lasntgadmin' ) }</button>&nbsp;
        <button class="button alt save_order wp-element-button" onClick={ handleRemoveAttendee } disabled={ isRemovable } >{ __( 'Remove Attendee', 'lasntgadmin' ) }</button>
        { isLoading && <Spinner/> }
      </div>
    </>
  );
}

export {
  AttendeeFormFieldsetButtons
};
