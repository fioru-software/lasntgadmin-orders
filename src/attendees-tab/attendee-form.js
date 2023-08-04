
import { useState, useContext } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { range } from 'lodash';

import { AttendeeFormFieldset } from './attendee-form-fieldset';
import { isCourseClosed } from '../product-utils';

import { ProductContext, OrderContext, AcfFieldsContext } from './attendee-context';

import { 
  extractIndexedEmployeeNumbersFromForm,
  extractLastIndexOfDuplicateEmployeeNumberField,
  createBatchRequest
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

  const [ notice, setNotice ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

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
  }

  /**
   * @requires ACF Field group settings for additional groups: when post_type = 'post' and rest_api = true;
   * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
   */
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    setNotice(null);

    if( quantity > 1 ) {
      checkForDuplicateEmployeeNumbers( quantity, formData );
    }

    const batchReq = createBatchRequest( nonce, formData, quantity, e.target, groupId, orderId, productId );
    console.log(batchReq);

    // @todo continue from here
    return;

    try {

      setNotice(null);
      setIsLoading(true);
      setSubmitButtonDisabled(true);

      setNotice({
        status: 'info',
        message: __( 'Updating attendees.', 'lasntgadmin' )
      });

      apiFetch.use( apiFetch.createNonceMiddleware( nonce ) );

      const attendeesRes = await apiFetch(
        {
          path: `/batch/v1`,
          method: 'POST',
          data: {
            requests: batchReq
          }
        }
      );

      const attendeeIds = extractAttendeeIdsFromResponse( attendeesRes.responses );

      setNotice({
        status: 'info',
        message: __( 'Adding attendees to order.', 'lasntgadmin' )
      });

      apiFetch.use( apiFetch.createNonceMiddleware( nonce ) );

      const orderAttendeeIdsUpdateRes = await apiFetch(
        getUpdateShopOrderRequestBody( orderId, nonce, {
          meta: {
            attendee_ids: [ ... new Set(attendeeIds) ]
          }
        })
      );

      // Employee number is not unique
      attendeesRes.responses.forEach( res => {
        if( res.status >= 500 && res.status <= 599 ) {
          throw new Error( res.body.message );
        }
      });

      // Valid attendees are less than order order quantity
      if( parseInt( quantity ) !== attendeeIds.length ) {
        throw new Error( `Missing attendee ${ attendeeIds.length }/${ quantity }` );
      }

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

      document.location.assign( isWaitingOrder( order) ? `/wp-admin/edit.php?post_type=shop_order` : `/wp-admin/post.php?post=${ orderId }&action=edit&tab=payment` );

    } catch (e) {
      console.error(e);
      setNotice({
        status: 'error',
        message: e.message
      });
      setIsLoading(false);

      delay( () => {
        setIsLoading(true);
        document.location.reload();
      }, 3000 );
      //setSubmitButtonDisabled(false);
    }
  }

  function isSubmitButtonDisabled() {
    return isCourseClosed( props.product.status );
  }

  return (
    <>
      <div class="form-wrap">

        <form class="panel-wrap woocommerce" onSubmit={ handleSubmit }>

          <div id="order_data" class="panel woocommerce-order-data">

            <ProductContext.Provider value={ props.product }>
              <OrderContext.Provider value={ order }>
                <AcfFieldsContext.Provider value={ props.fields }>

                { quantity > 0 && range( quantity ).map( ( index ) => {
                  return (
                    <AttendeeFormFieldset groupId={ groupId } quantity={ quantity } index={ index } attendee={ props.attendees[index] } />
                  );
                })}

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
