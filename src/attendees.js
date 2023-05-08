
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';

import { AttendeeFields } from './attendee-fields';
import { isWaitingOrder, hasAttendees } from './order-utils';
import { removeEmptyEntries } from './form-utils';

import { range, isNil } from 'lodash';

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
        message: 'Please add a product to your order'
      });
    }
  }, [ props.quantity ]);

  useEffect( () => {
    if( ! isNil( props.status ) && props.status === 'attendees' ) {
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
      form.querySelectorAll(`[name^="attendees[${index}][acf]"]`))
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
    const match = name.match(/attendees\[\d\]\[acf\]\[(.+)\]/)
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

  function createOrderUpdateRequestBody( orderId, status, attendeeIds ) {
    return {
      path: `/wc/v3/orders/${ orderId }`,
      method: 'PUT',
      data: {
        status,
        meta_data: [
          {
            key: 'attendee_ids',
            value: attendeeIds
          }
        ]
      }
    };
  }

  function extractAttendeeIdsFromResponse( attendeeResponses ) {
    return attendeeResponses.map( res => parseInt(res.body.id) );
  }

  /**
   * @requires ACF Field group settings for additional groups: when post_type = 'post' and rest_api = true;
   * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
   */
  async function handleSubmit(e) {
    e.preventDefault();

    const batchReq = createBatchRequestBody( quantity, e.target, parseInt(props.groupId), props.order.id );

    try {
      setNotice(null);
      setIsLoading(true);
      setSubmitButtonDisabled(true);

      setNotice({
        status: 'info',
        message: 'Updating attendees.'
      });

      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      const attendeesResponse = await apiFetch( 
        {
          path: `/batch/v1`,
          method: 'POST',
          data: {
            requests: batchReq
          }
        } 
      );

      const attendeeIds = extractAttendeeIdsFromResponse( attendeesResponse.responses );

      setNotice({
        status: 'info',
        message: 'Updating order.'
      });

      const orderRes = await apiFetch( 
        createOrderUpdateRequestBody( 
          props.order.id, 
          hasAttendees( props.order ) || isWaitingOrder( props.order ) ? props.order.status : 'pending', 
          attendeeIds 
        )
      );

      setNotice({
        status: 'success',
        message: `Updated attendees. Redirecting to ${ isWaitingOrder( props.order ) ? 'order list' : 'payment tab' }...`
      });

      document.location.assign( isWaitingOrder( props.order) ? `/wp-admin/edit.php?post_type=shop_order` : `/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=payment` );
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
              <button disabled={ isSubmitButtonDisabled } type="submit" class="button alt save_order wp-element-button" name="save" value="Create">Save attendees</button>
              { isLoading && <Spinner/> }
            </div>}
          </div>
        </form>
      </div> 
    </>
  );
};

export { Attendees };
