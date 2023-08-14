
import { useEffect, useState, useContext } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

import { isNil, delay, range } from 'lodash';

import { AttendeeFormFieldset } from './attendee-form-fieldset';
import { isCourseClosed } from '../product-utils';
import { isWaitingOrder, hasAttendees, getUpdateShopOrderRequestBody } from '../order-utils';

import { ProductContext, OrderContext, AcfFieldsContext } from './attendee-context';

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
} from "./attendee-form-utils";

/**
 * @param { number } quantity
 * @param { array } fields
 * @param { string } groupId
 * @param { string } nonce 
 * @param { object } order
 * @param { object } product
 */
const AttendeeForm = props => {

  const quantity = parseInt( props.quantity );
  const nonce = props.nonce;
  const order = props.order;
  const groupId = parseInt( props.groupId );
  const orderId = parseInt( props.order.id );
  const productId = parseInt( props.product.id );

  const [ attendees, setAttendees ] = useState([]);
  const [ notice, setNotice ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  useEffect( () => {
    if( ! isNil( props.attendees ) ) {
      setAttendees( props.attendees );
    }
  }, [ props.attendees ]);

  /**
   * @param {Number} quantity Order quantity
   * @param {Number} index Attendee index
   */
  function showDuplicateEmployeeNumberValidationError( quantity, index ) {
    if( index !== false ) {
      const input = document.querySelector(`input[name="attendees[${index}]['acf']['employee_number']"]`);
      const validationErrorMsg = __('Employee number must be unique.', 'lasntgadmin' );
      input.setCustomValidity( validationErrorMsg );
      input.reportValidity();
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
   * - update order meta with attendee_id
   * - update attendee meta with product_ids, order_ids and groups-read
   * - update order status
   *
   * @requires ACF Field group settings for additional groups: when post_type = 'post' and rest_api = true;
   * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
   */
  async function handleSubmit(e) {
    e.preventDefault();

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

      // acf fields only
      const attendeeAcfFieldsReqBody = createAttendeeAcfFieldsBatchRequestBody( index, formData );
      const attendeeAcfFieldsBatchReq = createAttendeeBatchRequest( nonce, index, formData, attendeeAcfFieldsReqBody, orderId )
      attendeeAcfFieldsBatchReqs.push( attendeeAcfFieldsBatchReq );

      // meta fields only
      const attendeeMetaFieldsReqBody = createAttendeeMetaFieldsBatchRequestBody( index, formData, groupId, orderId, productId );
      const attendeeMetaFieldsBatchReq = createAttendeeBatchRequest( nonce, index, formData, attendeeMetaFieldsReqBody, orderId )
      attendeeMetaFieldsBatchReqs.push(  attendeeMetaFieldsBatchReq );

      // acf + meta fields
      const attendeeBatchReqBody = createAttendeeBatchRequestBody( attendeeAcfFieldsReqBody, attendeeMetaFieldsReqBody);
      const attendeeBatchReq = createAttendeeBatchRequest( nonce, index, formData, attendeeBatchReqBody, orderId )
      attendeeBatchReqs.push(  attendeeBatchReq );

    }

    try {

      setNotice(null);
      setLoading(true);

      setNotice({
        status: 'info',
        message: __( 'Updating attendee details.', 'lasntgadmin' )
      });

      apiFetch.use( apiFetch.createNonceMiddleware( nonce ) );

      /**
       * Updating attendee details
       */
      const attendeeAcfFieldsBatchRes = await apiFetch(
        {
          path: `/batch/v1`,
          method: 'POST',
          data: {
            requests: attendeeAcfFieldsBatchReqs
          }
        }
      );

      const validAttendeeIds = extractAttendeeIdsFromResponse( attendeeAcfFieldsBatchRes.responses );
      // Valid attendees are missing additional acf fields.
      const validAttendees = extractValidAttendeesFromResponse( attendeeAcfFieldsBatchRes.responses );
      // Invalid attendees contain additional acf fields.
      const invalidAttendees = extractInvalidAttendeesFromResponse( attendeeAcfFieldsBatchRes.responses );
      
      if( validAttendees.length ) {
        const attendeeReqBodies = attendeeBatchReqs.map( req => req.body );
        const updatedAttendeeReqBodies = addIdToValidAttendees( attendeeReqBodies, validAttendees );
        setAttendees( updatedAttendeeReqBodies );
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
        message: __( 'Adding attendees to order.', 'lasntgadmin' )
      });

      /**
       * Attendee is already enrolled in this course
       */
      const orderAttendeeIdsUpdateRes = await apiFetch(
        getUpdateShopOrderRequestBody( orderId, nonce, {
          meta: {
            attendee_ids: [ ... new Set(validAttendeeIds) ]
          }
        })
      );

      /**
       * Valid attendees are less than order order quantity
       */
      if( parseInt( quantity ) !== validAttendees.length ) {
        throw new Error( `Missing attendee ${ validAttendees.length }/${ quantity }` );
      }

      /**
       * Attendees have been added to the order
       * To update the meta we need to reprocess the form as the form should now contains attendee ids
       */
      setNotice({
        status: 'info',
        message: __( 'Updating attendee meta.', 'lasntgadmin' )
      });

      formData = new FormData(e.target);
      attendeeMetaFieldsBatchReqs = [];

      for( let index=0; index<quantity; index++ ) {
        // meta fields only
        const attendeeMetaFieldsReqBody = createAttendeeMetaFieldsBatchRequestBody( index, formData, groupId, orderId, productId );
        const attendeeMetaFieldsBatchReq = createAttendeeBatchRequest( nonce, index, formData, attendeeMetaFieldsReqBody, orderId )
        attendeeMetaFieldsBatchReqs.push(  attendeeMetaFieldsBatchReq );
      }

      /**
       * Updating attendee meta 
       *  - order_ids
       *  - product_ids
       *  - groups-read 
       */
      const attendeeMetaFieldsBatchRes = await apiFetch(
        {
          path: `/batch/v1`,
          method: 'POST',
          data: {
            requests: attendeeMetaFieldsBatchReqs
          }
        }
      );

      setNotice({
        status: 'info',
        message: __( 'Updating order status.', 'lasntgadmin' )
      });

      const orderRes = await apiFetch(
        getUpdateShopOrderRequestBody(
          orderId,
          nonce,
          {
            status: hasAttendees( order ) || isWaitingOrder( order ) ? `wc-${order.status}` : 'wc-pending'
          }
        )
      );

      setNotice({
        status: 'success',
        message: __( 'Updated order. Redirecting...', 'lasntgadmin' )
      });

      //document.location.assign( isWaitingOrder( order) ? `/wp-admin/edit.php?post_type=shop_order` : `/wp-admin/post.php?post=${ orderId }&action=edit&tab=payment` );

    } catch (e) {
      console.error(e);
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
      <div class="form-wrap">

        <form class="panel-wrap woocommerce" onSubmit={ handleSubmit }>

          <div id="order_data" class="panel woocommerce-order-data">

            <ProductContext.Provider value={ props.product }>
              <OrderContext.Provider value={ order }>
                <AcfFieldsContext.Provider value={ props.fields }>

                  { attendees.length > 0 && attendees.map( ( attendee, index ) => <AttendeeFormFieldset groupId={ groupId } quantity={ quantity } index={ index } attendee={ attendees[index] } /> ) }
                  { attendees.length == 0 && quantity > 0 && range( quantity ).map( index => <AttendeeFormFieldset groupId={ groupId } quantity={ quantity } index={ index } />) }

                </AcfFieldsContext.Provider>
              </OrderContext.Provider>
            </ProductContext.Provider>

            { quantity > 0 && 
            <div class="form-field">
              { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
              <button type="submit" class="button alt save_order wp-element-button button-primary" name="save" value="Create" disabled={ isSubmitButtonDisabled() } >{ __( 'Save attendees', 'lasntgadmin' ) }</button>
              { isLoading && <Spinner/> }
            </div>}

          </div>
        </form>
      </div> 
    </>
  );
};

export { 
  AttendeeForm, 
};
