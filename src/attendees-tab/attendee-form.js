
import { useEffect, useState, useContext } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

import { isNil, delay, range, isNull } from 'lodash';

import { AttendeeFormFieldsets } from './attendee-form-fieldsets';


import { isCourseClosed } from '../product-utils';
import { isWaitingOrder, isCompletedOrder, isCancelledOrder, getUpdateShopOrderRequest, getPrefixedPendingPaymentStatus, getPrefixedOrderStatus } from '../order-utils';

import { ProductContext, OrderContext, AcfFieldsContext, AttendeesContext, AttendeeFormContext } from './attendee-context';

import { wpBatchReq } from '../fetch-utils';

import { 
  extractValidAttendeesFromResponse,
  extractInvalidAttendeesFromResponse,
  extractAttendeeIdsFromResponse,
  extractIndexedEmployeeNumbersFromForm,
  extractLastIndexOfDuplicateEmployeeNumberField,
  createAttendeeBatchRequestBody,
  createAttendeeAcfFieldsBatchRequestBody,
  createAttendeeMetaFieldsBatchRequestBody,
  createAttendeeBatchRequest,
  addIdToValidAttendees
} from "./attendee-utils";

import {
  getPendingEnrolmentStatus,
  createEnrolmentLogBatchRequestBody,
  createEnrolmentLogBatchRequest
} from "./enrolment-log-utils";

/**
 * @param { number } quantity
 * @param { array } fields
 * @param { string } groupId
 * @param { string } nonce 
 * @param { object } order
 * @param { object } product
 */
const AttendeeForm = props => {

  const nonce = props.nonce;
  const order = props.order;
  const groupId = parseInt( props.groupId );
  const orderId = parseInt( props.order.id );
  const productId = parseInt( props.product.id );

  const [ notice, setNotice ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);
  const [ attendees, setAttendees ] = useState([]);
  const [ quantity, setQuantity ] = useState( parseInt( props.quantity ) );

  useEffect( () => {
    if( Array.isArray( props.attendees ) ) {
      let accumulator = [];
      for( let i=0; i<quantity; i++) {
        if( ! isNil( props.attendees[i] ) ) {
          accumulator.push( props.attendees[i] )
        } else {
          accumulator.push( new Object() );
        }
      }
      setAttendees( accumulator );
    }
  }, [ props.attendees ]);

  useEffect( () => {
    if( Array.isArray( attendees) && attendees.length > 0 ) {
      setAttendees( attendees );
    }
  }, [ attendees ]);

  /**
   * @param {Number} quantity Order quantity
   * @param {Number} index Attendee index
   */
  function showDuplicateEmployeeNumberValidationError( quantity, index ) {
    if( index !== false ) {
      setNotice(null);
      const input = document.querySelector(`input[name="attendees[${index}]['acf']['employee_number']"]`);
      const validationErrorMsg = __('Employee number must be unique.', 'lasntgadmin' );
      input.setCustomValidity( validationErrorMsg );
      input.reportValidity();
      /**
       * Browser error messages don't show for disabled fields. 
       */
      setNotice({
        status: 'error',
        message: validationErrorMsg
      });
    }
  }

  /**
   * Check for duplicate employee numbers. 
   * The custom validation error is cleared onInput by the PredictiveSearchFields component.
   *
   * @param {Number} quantity
   * @param {FormData} formData
   * @see PredictiveSearchFields
   */
  function checkForDuplicateEmployeeNumbers( quantity, formData ) {
    const indexedEmployeeNumbers = extractIndexedEmployeeNumbersFromForm( quantity, formData );
    const indexOfDuplicateEmployeeNumberField = extractLastIndexOfDuplicateEmployeeNumberField( indexedEmployeeNumbers );
    showDuplicateEmployeeNumberValidationError( quantity, indexOfDuplicateEmployeeNumberField );
    return indexOfDuplicateEmployeeNumberField !== false;
  }

  /**
   * Sends multiple REST requests.
   * - create/update attendee acf fields
   * - update order meta with attendee_id @deprecated
   * - add enrolment log with order_id, attendee_id, product_id, comment, status
   * - update attendee meta with product_ids, order_ids and groups-read @deprecated product_ids and order_ids
   * - update order status
   *
   * @requires ACF Field group settings for additional groups: when post_type = 'post' and rest_api = true;
   * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
   */
  async function handleSubmit(e) {
    e.preventDefault();
    window.fetchInProgress = true; 

    let formData = new FormData(e.target);

    setNotice(null);

    if( quantity > 1 ) {
      if(checkForDuplicateEmployeeNumbers( quantity, formData )) {
        return;
      }
    }

    let attendeeAcfFieldsBatchReqs = [];
    let attendeeMetaFieldsBatchReqs = [];
    let attendeeBatchReqs = [];

    for( let index=0; index<quantity; index++ ) {

      // attendee acf fields only
      const attendeeAcfFieldsReqBody = createAttendeeAcfFieldsBatchRequestBody( index, formData );
      const attendeeAcfFieldsBatchReq = createAttendeeBatchRequest( nonce, index, formData, attendeeAcfFieldsReqBody, orderId )
      attendeeAcfFieldsBatchReqs.push( attendeeAcfFieldsBatchReq );

    }

    try {

      setNotice(null);
      setLoading(true);

      setNotice({
        status: 'info',
        message: __( 'Updating attendee details...', 'lasntgadmin' )
      });

      apiFetch.use( apiFetch.createNonceMiddleware( nonce ) );

      /**
       * Batch updating attendee acf field details only.
       */
      const attendeeAcfFieldsBatchRes = await apiFetch(
        wpBatchReq(
          attendeeAcfFieldsBatchReqs
        )
      );

      const validAttendeeIds = extractAttendeeIdsFromResponse( attendeeAcfFieldsBatchRes.responses );
      // Valid attendees are missing additional acf fields from the response.
      const validAttendees = extractValidAttendeesFromResponse( attendeeAcfFieldsBatchRes.responses );
      // Invalid attendees contain additional acf fields in the response.
      const invalidAttendees = extractInvalidAttendeesFromResponse( attendeeAcfFieldsBatchRes.responses );

      if( validAttendees.length ) {
        const attendeeAcfFieldsReqBodies = attendeeAcfFieldsBatchReqs.map( req => req.body );
        const updatedAttendeeAcfFieldsReqBodies = addIdToValidAttendees( attendeeAcfFieldsReqBodies, validAttendees );
        setAttendees( updatedAttendeeAcfFieldsReqBodies );
      }

      /**
       * Employee number is not unique
       */
      attendeeAcfFieldsBatchRes.responses.forEach( res => {
        if( Object.hasOwn( res, 'body') && Object.hasOwn( res.body, 'message') ) {
          throw new Error( res.body.message );
        }
      });

      setNotice({
        status: 'info',
        message: __( 'Adding attendees to enrolment log...', 'lasntgadmin' )
      });

      let attendeeEnrolmentLogBatchReqs = [];
      for( const attendeeId of validAttendeeIds ) {
        const attendeeEnrolmentLogReqBody = createEnrolmentLogBatchRequestBody( attendeeId, productId, orderId, groupId, getPendingEnrolmentStatus(), '' );
        const attendeeEnrolmentLogBatchReq = createEnrolmentLogBatchRequest( nonce, attendeeEnrolmentLogReqBody );
        attendeeEnrolmentLogBatchReqs.push( attendeeEnrolmentLogBatchReq );
      }

      /**
       * Adding attendees to enrolment log.
       * The enrolment log is the new source of truth for linking orders, attendees and products.
       */
      const attendeeEnrolmentLogBatchRes = await apiFetch(
        wpBatchReq(
          attendeeEnrolmentLogBatchReqs
        )
      );
      // @todo check attendeeEnrolmentLogBatchRes.responses

      setNotice({
        status: 'info',
        message: __( 'Adding attendees to order...', 'lasntgadmin' )
      });

      /**
       * Add attendee ids to order meta data.
       * @deprecated
       */
      const orderAttendeeIdsUpdateRes = await apiFetch(
        getUpdateShopOrderRequest( orderId, nonce, {
          meta: {
            attendee_ids: validAttendeeIds
          }
        })
      );

      /**
       * Valid attendees are less than order order quantity.
       */
      if( parseInt( quantity ) !== validAttendees.length ) {
        throw new Error( `Missing attendee ${ validAttendees.length }/${ quantity }` );
      }

      /**
       * Attendees have been added to the order
       * To update the meta we need to reprocess the form as the form should now contain attendee ids
       */
      setNotice({
        status: 'info',
        message: __( 'Updating attendee meta...', 'lasntgadmin' )
      });

      formData = new FormData(e.target);
      attendeeMetaFieldsBatchReqs = [];

      for( let index=0; index<quantity; index++ ) {
        /**
         * attendee meta fields only (order_ids, product_ids, groups-read)
         * @deprecated order_ids and product_ids
         */
        const attendeeMetaFieldsReqBody = createAttendeeMetaFieldsBatchRequestBody( index, formData, groupId, orderId, productId );
        const attendeeMetaFieldsBatchReq = createAttendeeBatchRequest( nonce, index, formData, attendeeMetaFieldsReqBody, orderId )
        attendeeMetaFieldsBatchReqs.push(  attendeeMetaFieldsBatchReq );
      }

      /**
       * Updating attendee meta
       *  - order_ids
       *  - product_ids
       *  - groups-read
       *  @deprecated
       */
      const attendeeMetaFieldsBatchRes = await apiFetch(
        wpBatchReq(
          attendeeMetaFieldsBatchReqs
        )
      );

      setNotice({
        status: 'info',
        message: __( 'Updating order status...', 'lasntgadmin' )
      });

      const orderRes = await apiFetch(
        getUpdateShopOrderRequest(
          orderId,
          nonce,
          {
            status: isCompletedOrder( order ) || isCancelledOrder( order ) ? getPrefixedOrderStatus( order.status ) : getPrefixedPendingPaymentStatus()
          }
        )
      );

      setNotice({
        status: 'success',
        message: __( 'Updated order. Redirecting...', 'lasntgadmin' )
      });

      document.location.assign( `/wp-admin/post.php?post=${ orderId }&action=edit&tab=payment` );

    } catch (e) {
      console.error(e);
      window.fetchInProgress = false;
      setNotice({
        status: 'error',
        message: e.message
      });
      setLoading(false);
    }
  }

  function isSubmitButtonDisabled() {
    return isCourseClosed( props.product.status ) || isLoading;
  }

  return (
    <>
      <div className="form-wrap">

        <AttendeeFormContext.Provider value={ { isLoading } }>
          <form className="panel-wrap woocommerce" onSubmit={ handleSubmit } autocomplete="off">

            <div id="order_data" className="panel woocommerce-order-data">

              <ProductContext.Provider value={ props.product }>
                <OrderContext.Provider value={ order }>
                  <AcfFieldsContext.Provider value={ props.fields }>
                    <AttendeesContext.Provider value={ attendees }>
                      <AttendeeFormFieldsets nonce={ nonce } groupId={ groupId } quantity={ quantity } setAttendees={ setAttendees } setFormNotice={ setNotice } setOrderQuantity={ setQuantity } />
                    </AttendeesContext.Provider>
                  </AcfFieldsContext.Provider>
                </OrderContext.Provider>
              </ProductContext.Provider>

              { quantity > 0 && 
              <div className="form-field">
                { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
                <button type="submit" className="button alt save_order wp-element-button button-primary" name="save" value="Create" disabled={ isSubmitButtonDisabled() } >{ __( 'Save attendees', 'lasntgadmin' ) }</button>
                { isLoading && <Spinner/> }
              </div>}

            </div>
          </form>
        </AttendeeFormContext.Provider>
      </div> 
    </>
  );
};

export { 
  AttendeeForm, 
};
