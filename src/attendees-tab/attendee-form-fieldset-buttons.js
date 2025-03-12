
import { useContext, useState, useEffect } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ProductContext, OrderContext, AttendeeContext, AttendeesContext, AttendeeFormContext } from './attendee-context';
import { isCourseClosed } from '../product-utils';
import apiFetch from '@wordpress/api-fetch';
import { isNil, isNull, isEmpty } from 'lodash';

import { 
  getRemoveAttendeeFromShopOrderRequest,
  getUpdateShopOrderRequest, 
  getUpdateOrderRequest, 
  filterOrderMetaByKey, 
  filterAttendeeIdFromOrderMeta,
  filterItemFromOrderMeta,
  isCompletedOrder,
  isCompletedStatus, 
  isCancelledOrder,
  isCancelledStatus,
  isGrantPaid, 
  isPurchaseOrderPaid, 
  isAttendeeIdInOrderMeta
} from '../order-utils';

import {
  getUpdateProductRequest
} from '../product-utils';

import { 
  isExistingAttendee, 
  isAttendeeLoadedViaProps, 
  isAttendeeLoadedViaSearch,
  filterOrderIdFromAttendeeMeta,
  filterProductIdFromAttendeeMeta,
  isProductIdInAttendeeMeta,
  isOrderIdInAttendeeMeta, 
  getUpdateAttendeeRequest  
} from './attendee-utils';

import {
  getUpdateEnrolmentLogRequest, 
  getCanceledEnrolmentStatus,
  getRemovedEnrolmentStatus
} from './enrolment-log-utils';


/**
 * Decides which actions are available per attendee.
 * Product statuses open_for_enrollment
 */
const AttendeeFormFieldsetButtons = props => {

  const nonce = props.nonce;
  const quantity = props.quantity;
  const index = props.index;

  const product = useContext( ProductContext );
  const attendees = useContext( AttendeesContext ); // All attendees
  const attendee = useContext( AttendeeContext ); // Attendee relevant to this button
  const order = useContext( OrderContext );
  const attendeeFormContext = useContext( AttendeeFormContext );

  const [ isLoading, setLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);
  const [ isRemovable, setRemovable ] = useState();
  const [ isResetable, setResetable ] = useState();
  const [ attendeeId, setAttendeeId ] = useState(); // attendee.id || attendeeId

  useEffect( () => {
    if( ! isNil( attendee ) ) {
      if( isAttendeeLoadedViaProps( attendee ) ) {
        setAttendeeId( parseInt( attendee.ID ) );
      }
      if( isAttendeeLoadedViaSearch( attendee ) ) {
        setAttendeeId( parseInt( attendee.id ) );
      }
    }
  }, [ attendee ]);

  useEffect( () => {
    setResetable( isResetButtonDisabled() );
  }, [ product.status, attendee, isLoading, quantity, attendeeFormContext.isLoading ]);

  useEffect( () => {
    setRemovable( isRemoveButtonDisabled() );
  }, [ product.status, order.payment_method, isLoading, attendee, quantity, attendeeFormContext.isLoading ]);

  /**
   * Reset button is disabled when the course has a status considered to be closed
   */
  function isResetButtonDisabled() {
    return isCourseClosed( product.status ) || ! isExistingAttendee( attendee ) || isLoading || attendeeFormContext.isLoading;
  }

  /**
   * Remove button is disabled 
   * when the course has a status considered to be closed 
   * or payment method is not grant and purchase order
   */
  function isRemoveButtonDisabled() {
    return attendeeFormContext.isLoading || isCourseClosed( product.status ) || isLoading || quantity < 2 || ( order.payment_method !== "" && ! isGrantPaid( order.payment_method ) && ! isPurchaseOrderPaid( order.payment_method ) );
  }

  /**
   * When product in attendee meta
   * then remove product from attendee's meta.
   * @throws Error
   */
  async function removeProductFromAttendee() {

    if( attendeeId && isProductIdInAttendeeMeta( product.id, attendee.meta ) ) {

      setNotice({
        status: 'info',
        message: __( 'Removing product from attendee meta...', 'lasntgadmin' )
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
        message: __( 'Removed product from attendee meta.', 'lasntgadmin' )
      });
    }

  }

  /**
   * When order in attendee meta
   * then remove order from attendee's meta.
   * @throws Error
   */
  async function removeOrderFromAttendee() {


      if( attendeeId && isOrderIdInAttendeeMeta( order.id, attendee.meta ) ) {

        setNotice({
          status: 'info',
          message: __( 'Removing order from attendee meta...', 'lasntgadmin' )
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
          message: __( 'Removed order from attendee meta.', 'lasntgadmin' )
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
        message: __( 'Removing attendee from order meta...', 'lasntgadmin' )
      });

      order.meta_data = filterItemFromOrderMeta( 'attendee_ids', attendeeId, order.meta_data );
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
        message: __( 'Removed attendee from order meta.', 'lasntgadmin' )
      });

    }
  }

  /**
   * When removing an attendee then decrement the order quantity.
   */
  async function decrementOrderQuantity() {

    const updatedQuantity = quantity - 1;

    setNotice({
      status: 'info',
      message: __( 'Decrementing order quantity...', 'lasntgadmin' )
    });

    props.setOrderQuantity( updatedQuantity );

    const decrementOrderQuantityRequest = getUpdateOrderRequest(
      order.id,
      nonce,
      {
        total: order.total - ( updatedQuantity * product.price ),
        line_items: Array.isArray( order?.line_items ) ? order?.line_items.map( item => {
          return {
            id: item.id,
            quantity: updatedQuantity,
            total: `${ updatedQuantity * product.price}`,
            subtotal: `${ updatedQuantity * product.price}`
          };
        }) : [],
      }
    );

    const orderRes = await apiFetch(
      decrementOrderQuantityRequest
    );

    setNotice({
      status: 'success',
      message: __( 'Decremented order quantity.', 'lasntgadmin' )
    });

  }

  async function incrementProductStock() {

    if( isCompletedOrder( order ) ) {

      setNotice({
        status: 'info',
        message: __( 'Incrementing course spaces...', 'lasntgadmin' )
      });

      const incrementProductStockQuantityRequest = getUpdateProductRequest(
        product.id,
        nonce,
        {
          stock_quantity: product.stock_quantity + 1,
          stock_status:  'instock' // instock, onbackorder, outofstock
        }
      );

      const productRes = await apiFetch(
        incrementProductStockQuantityRequest
      );

      setNotice({
        status: 'success',
        message: __( 'Incremented course spaces.', 'lasntgadmin' )
      });

    }

  }

  /**
   * When resetting an attendee for an order the following happens.
   * @deprecated The product_id and order_id is removed from the attendee's metadata.
   * @deprecated The attendee_id is removed from the order metadata.
   * Order quantity is left untouched.
   *
   * When resetting a saved attendee enrolment a cancellation reason must be provided and
   * the enrolment status must be set to canceled.
   * @see https://github.com/fioru-software/lasntgadmin-enrolment-log
   */
  async function handleResetAttendee( e ) {
    e.preventDefault();
    setResetable(false);
    setRemovable(false);

    try {

      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      /**
       * When saved attendee
       */
      if( ! isNil( attendee ) && isAttendeeLoadedViaProps( attendee ) && ! isEmpty( attendee.enrolment_log ) ) {

        // Enrolment log entry
        const logEntry = {
          post_id: attendee.enrolment_log.post_id,
          order_id: attendee.enrolment_log.order_id,
          attendee_id: attendee.enrolment_log.attendee_id,
          course_id: attendee.enrolment_log.course_id,
          status: getRemovedEnrolmentStatus(), // canceled status
          comment: ''
        };
        
        // Prompt for cancellation reason
        if( isCompletedOrder( order ) ) {
          logEntry.status = getCanceledEnrolmentStatus();
          logEntry.comment = prompt("Please provide a reason for the cancellation?");
          if( isNull( logEntry.comment ) || '' === logEntry.comment ) {
            setNotice({
              status: 'error',
              message: __( 'A reason is required when resetting an attendee.', 'lasntgadmin' )
            });
            return;
          }
        }

        setLoading(true);

        setNotice({
          status: 'info',
          message: __( 'Updating enrolment log.', 'lasntgadmin' )
        });

        // Update enrolment log
        const updateEnrolmentLogRes = await apiFetch(
          getUpdateEnrolmentLogRequest(
            nonce,
            logEntry
          )
        );

      }

      setNotice({
        status: 'info',
        message: __( 'Updating metadata.', 'lasntgadmin' )
      });

      // Update metadata
      await removeAttendeeFromOrder();
      await removeOrderFromAttendee();
      await removeProductFromAttendee();

      props.setAttendee(null);

      setNotice({
        status: 'success',
        message: __( 'Reset attendee.', 'lasntgadmin' )
      });

      setLoading(false);
      setRemovable(true);

    } catch (e) {
      console.error(e);
      setNotice({
        status: 'error',
        message: e.message
      });
      setLoading(false);
      setRemovable(true);
      setResetable(true);
    }
  }

  /**
   * When removing an attendee for an order the following happens.
   * @deprecated The product_id and order_id s removed from the attendee's metadata.
   * @deprecated The attendee_id is removed from the order metadata.
   * Order quantity is decremented
   *
   * When removing a saved attendee enrolment a cancellation reason must be provided and
   * the enrolment status must be set to canceled.
   * @see https://github.com/fioru-software/lasntgadmin-enrolment-log
   */
  async function handleRemoveAttendee( e ) {

    e.preventDefault();
    setResetable( false );
    setRemovable( false );

    try {

      props.setFormNotice(null);

      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      /**
       * When existing attendee 
       *  - The page reloaded or just loaded. 
       *  - Props set via PHP in lib/PageUtils.php
       */
      if( ! isNil( attendee ) && isAttendeeLoadedViaProps( attendee ) && ! isEmpty( attendee.enrolment_log ) ) {

        // Enrolment log entry
        const logEntry = {
          post_id: attendee.enrolment_log.post_id,
          order_id: attendee.enrolment_log.order_id,
          attendee_id: attendee.enrolment_log.attendee_id,
          course_id: attendee.enrolment_log.course_id,
          status: getRemovedEnrolmentStatus(),
          comment: ''
        };

        // Prompt for cancellation reason
        if( isCompletedOrder( order ) ) {
          logEntry.status = getCanceledEnrolmentStatus();
          logEntry.comment = prompt("Please provide a reason for the cancellation?");
          if( isNull( logEntry.comment ) || '' === logEntry.comment ) {
            setNotice({
              status: 'error',
              message: __( 'A reason is required to remove an attendee.', 'lasntgadmin' )
            });
            return;
          }
        }
        setLoading(true);

        setNotice({
          status: 'info',
          message: __( 'Updating enrolment log.', 'lasntgadmin' )
        });

        // Update enrolment log.
        const updateEnrolmentLogRes = await apiFetch(
          getUpdateEnrolmentLogRequest(
            nonce,
            logEntry
          )
        );

      }

      setNotice({
        status: 'info',
        message: __( 'Updating metadata.', 'lasntgadmin' )
      });

      // Meta data
      await removeAttendeeFromOrder();
      await removeOrderFromAttendee();
      await removeProductFromAttendee();

      setNotice({
        status: 'info',
        message: __( 'Updating order quantity and course spaces.', 'lasntgadmin' )
      });

      await decrementOrderQuantity(); // NB
      await incrementProductStock(); // NB

      setNotice({
        status: 'info',
        message: __( 'Removing attendee.', 'lasntgadmin' )
      });

      /**
       * Remove attendee by index and update UI
       */
      const remainingAttendees = attendees.filter( ( a, i )  => {
        return i !== index;
      } );
      props.setAttendees( remainingAttendees );

      /**
       * This part of the code is never reached
       * as this attendee has been removed from the DOM.
       */
      setNotice({
        status: 'success',
        message: __( 'Removed attendee.', 'lasntgadmin' )
      });

      setLoading(false);

    } catch (e) {
      console.error(e);
      setNotice({
        status: 'error',
        message: e.message
      });
      setLoading(false);
      setResetable( true );
      setRemovable( true );
    }
  }

  return (
    <>
      <div className="form-field">
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <button className="button alt save_order wp-element-button" onClick={ handleResetAttendee } disabled={ isResetable } >{ __( 'Reset Attendee', 'lasntgadmin' ) }</button>&nbsp;
        <button className="button alt save_order wp-element-button" onClick={ handleRemoveAttendee } disabled={ isRemovable } >{ __( 'Remove Attendee', 'lasntgadmin' ) }</button>
        { isLoading && <Spinner/> }
      </div>
    </>
  );
}

export {
  AttendeeFormFieldsetButtons
};
