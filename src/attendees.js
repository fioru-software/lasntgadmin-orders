
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { AttendeeFields } from './attendee-fields';
import { isWaitingOrder, hasAttendees } from './order-utils';
import { removeEmptyEntries } from './form-utils';

import { delay, range, isNil, isNull } from 'lodash';

/**
 * @param { number } quantity
 * @param { array } fields
 * @param { string } groupId
 * @param { string } nonce 
 * @param { object } order
 */
const Attendees = props => {

  const [ notice, setNotice ] = useState(null);
  const [ quantity, setQuantity ] = useState(0);
  const [ isSubmitButtonDisabled, setSubmitButtonDisabled ] = useState(true);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect( () => {
    if( props?.quantity > 0) {
      setQuantity( parseInt(props.quantity) );
    } else {
      setNotice({
        status: 'warning',
        message: __( 'Please add a product to your order', 'lasntgadmin' )
      });
    }
  }, [ props.quantity ]);

  useEffect( () => {
    if( ! isNil( props.status ) && ['attendees', 'waiting-list'].includes( props.status ) ) {
      setSubmitButtonDisabled(false);
    }
  }, [ props.status ] );

  /**
   * @param { number } index Attendee index for HTML inputs
   * @param { HTMLElement } form
   * @return array
   */
  function extractAttendeeByIndex( index, form ) {
    return Array.from(
      form.querySelectorAll(`[name^="attendees[${index}]['acf']"]`))
      .filter( input => input.value !== "" )
      .map( input => { 
        return [ extractAcfInputs( input.getAttribute('name') ), determineAcfValue( input.value) ]
      }
    );
  }

  /**
   * Checkboxes require boolean
   */
  function determineAcfValue( value ) {
    return value === "true" ? true : value === "false" ? false : value
  }

  /**
   * @param { string } name ACF input field's name attribute
   */
  function extractAcfInputs( name ) {
    const match = name.match(/attendees\[\d\]\['acf'\]\['(.+)'\]/)
    return match ? match[1] : null;
  }

  /**
   * @param { number } quantity Number of attendees
   * @param { HTMLElement } form
   * @param { number } groupId
   * @param { number } orderId
   * @return object 
   */
  function createBatchRequestBody( quantity, form, groupId, orderId) {
    return range(quantity).map( ( index ) => {
      return createAttendeesRequestBody( index, form, groupId, orderId );
    });
  }

  /**
   * @todo refactor groups-read, order_ids and product_ids meta
   */
  function createAttendeesRequestBody( index, form, groupId, orderId ) {
    const formData = new FormData(form);
    const attendeeId = formData.has(`attendees[${index}]['id']`) ? parseInt(formData.get(`attendees[${index}]['id']`)) : null;
    return {
      path: attendeeId ? `/wp/v2/attendee/${attendeeId}?order_id=${orderId}` : `/wp/v2/attendee?order_id=${orderId}`,
      method: 'POST',
      body: {
        id: attendeeId,
        status: formData.has(`attendees[${index}]['status']`) ? formData.get(`attendees[${index}]['status']`) : 'publish',
        meta: {
          'groups-read': formData.has(`attendees[${index}]['meta']['groups-read']`) ? [ ... new Set( formData.get(`attendees[${index}]['meta']['groups-read']`).split(',').map(Number).filter(Number).concat( parseInt(props.groupId) ) ) ] : [ parseInt(props.groupId) ],
          'order_ids': formData.has(`attendees[${index}]['meta']['order_ids']`) ? [ ... new Set( formData.get(`attendees[${index}]['meta']['order_ids']`).split(',').map(Number).filter(Number).concat( props.order.id ) ) ] : [ props.order.id ],
          'product_ids': formData.has(`attendees[${index}]['meta']['product_ids']`) ? [ ... new Set( formData.get(`attendees[${index}]['meta']['product_ids']`).split(',').map(Number).filter(Number).concat( parseInt(props.productId) ) ) ] : [ parseInt(props.productId) ]
        },
        acf: Object.assign(
          Object.fromEntries(
            extractAttendeeByIndex( index, form )
          )
        )
      }
    };
  }

  function createUpdateOrderAttendeeIdsRequestBody( orderId, attendeeIds ) {
    const body = {
      path: `/wp/v2/shop_order/${orderId}`,
      method: 'PUT',
      data: {
        id: orderId,
        meta: {
          'attendee_ids': [ ... new Set(attendeeIds) ]
        }
      }
    };
    return body;
  }

  function createUpdateOrderStatusRequestBody( orderId, status ) {
    const body = {
      path: `/wp/v2/shop_order/${orderId}`,
      method: 'PUT',
      data: {
        id: orderId,
        status,
      }
    };
    return body;
  }

  function extractAttendeeIdsFromResponse( attendeeResponses ) {
    return attendeeResponses.map( res => Object.hasOwn(res.body, 'id' ) ? parseInt( res.body.id ) : null ).filter(Boolean);
  }

  function extractEmployeeNumbersFromForm( quantity, form ) {
    const formData = new FormData(form);
    return range(quantity).map( ( index ) => {
      if( formData.has(`attendees[${index}]['acf']['employee_number']`) ) {
        return {
          index: index,
          value: formData.get(`attendees[${index}]['acf']['employee_number']`)
        };
      }
    }).filter( employeeNumber => ! isNull( employeeNumber ) ).reverse();
  }

  function validateUniqueEmployeeNumbers( quantity, form ) {
    const employeeNumbers = extractEmployeeNumbersFromForm( quantity, form );
    const formData = new FormData(form);
    let valid = true;
    for( const employeeNumber of employeeNumbers ) {
      const count = countOccurrencesOfEmployeeNumber( employeeNumber.value, employeeNumbers.map( obj => obj.value ) );
      const input = document.querySelector(`input[name="attendees[${employeeNumber.index}]['acf']['employee_number']"]`);
      if( count > 1 ) {
        const validationErrorMsg = __('Employee number must be unique.', 'lasntgadmin' );
        input.setCustomValidity( validationErrorMsg );
        input.reportValidity();
        setNotice({
          status: 'error', 
          message: validationErrorMsg
        });
        valid = false;
        break;
      } else {
        input.setCustomValidity("");
      }
    }
    return valid;
  }

  function countOccurrencesOfEmployeeNumber( employeeNumber, employeeNumbers ) {
    return employeeNumbers.reduce( 
      ( accumulator, currentValue, currentIndex  ) => {
        return accumulator += currentValue === employeeNumber ? 1 : 0;
      }, 0 );
  }

  /**
   * @requires ACF Field group settings for additional groups: when post_type = 'post' and rest_api = true;
   * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
   */
  async function handleSubmit(e) {
    e.preventDefault();
    setNotice(null);

    if( quantity > 1 ) {
      if( ! validateUniqueEmployeeNumbers( quantity, e.target ) ) {
        return false;
      }
    }

    const batchReq = createBatchRequestBody( quantity, e.target, parseInt(props.groupId), props.order.id );

    try {

      setNotice(null);
      setIsLoading(true);
      setSubmitButtonDisabled(true);

      setNotice({
        status: 'info',
        message: __( 'Updating attendees.', 'lasntgadmin' )
      });

      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

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

      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      const orderAttendeeIdsUpdateRes = await apiFetch( 
        createUpdateOrderAttendeeIdsRequestBody( 
          props.order.id, 
          attendeeIds 
        )
      );

      // Employee number is not unique
      attendeesRes.responses.forEach( res => {
        if( res.status >= 500 && res.status <= 599 ) {
          throw new Error( res.body.message );
        }
      });

      // Valid attendees are less than order quantity
      if( parseInt( props?.quantity ) !== attendeeIds.length ) {
        throw new Error( `Missing attendee ${ attendeeIds.length }/${ props?.quantity }` );
      }

      setNotice({
        status: 'info',
        message: __( 'Updating order status.', 'lasntgadmin' )
      });

      const orderRes = await apiFetch( 
        createUpdateOrderStatusRequestBody( 
          props.order.id, 
          hasAttendees( props.order ) || isWaitingOrder( props.order ) ? props.order.status : 'wc-pending'
        )
      );

      setNotice({
        status: 'success',
        message: __( 'Updated order. Redirecting...', 'lasntgadmin' )
      });

      document.location.assign( isWaitingOrder( props.order) ? `/wp-admin/edit.php?post_type=shop_order` : `/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=payment` );
      
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
  
  return (
    <>
      <div class="form-wrap">
        <form class="panel-wrap woocommerce" onSubmit={ handleSubmit }>
          <div id="order_data" class="panel woocommerce-order-data">
            { props?.quantity > 0 && range(quantity).map( ( index ) => {
              return (
                <AttendeeFields fields={ props.fields } attendee={ props.attendees[index] } index={ index } disabled={ isSubmitButtonDisabled } nonce={ props.nonce } />
              );
            })}

            { props?.quantity > 0 && 
            <div class="form-field">
              { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
              <button disabled={ isSubmitButtonDisabled } type="submit" class="button alt save_order wp-element-button button-primary" name="save" value="Create">{ __( 'Save attendees', 'lasntgadmin' ) }</button>
              { isLoading && <Spinner/> }
            </div>}
          </div>
        </form>
      </div> 
    </>
  );
};

export { Attendees };
