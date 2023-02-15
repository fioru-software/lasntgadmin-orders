
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';

import { AttendeeFields } from './attendee-fields';
import { removeEmptyEntries } from './form-utils';

import { range } from 'lodash';

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
  const [ isDisabled, setIsDisabled ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ buttonText, setButtonText ] = useState("Save");

  useEffect( () => {
    if( props?.quantity > 0) {
      setQuantity( parseInt(props.quantity) );
    } else {
      setNotice({
        status: 'warning',
        message: 'Please add a product to your order'
      });
    }
  }, [ props.quantity]);

  useEffect( () => {
  }, [ props.fields ]);

  useEffect( () => {
  }, [ props.attendees ]);

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
        return [ extractAcfInputs( input.getAttribute('name') ), input.value ]
      }
    );
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
      return createRequestBody( index, form, groupId, orderId );
    });
  }

  function createRequestBody( index, form, groupId, orderId ) {
    const formData = new FormData(form);
    const attendeeId = formData.has(`attendees[${index}]['id']`) ? parseInt(formData.get(`attendees[${index}]['id']`)) : null;
    return {
      path: attendeeId ? `/wp/v2/attendee/${attendeeId}?order_id=${orderId}` : `/wp/v2/attendee?order_id=${orderId}`,
      method: 'POST',
      body: {
        id: attendeeId,
        status: formData.has(`attendees[${index}]['status']`) ? formData.get(`attendees[${index}]['status']`) : 'publish',
        meta: {
          'groups-read': parseInt(props.groupId),
          'attendee_order_ids': props.order.id
        },
        acf: Object.assign(
          Object.fromEntries(
            extractAttendeeByIndex( index, form )
          )
        )
      }
    };
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
      setIsDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      const res = await apiFetch( 
        {
          path: `/batch/v1`,
          method: 'POST',
          data: {
            requests: batchReq
          }
        } 
      );

      setNotice({
        status: 'success',
        message: 'Attendees added. Please wait to be redirected...'
      });

      document.location.assign( `/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=payment` );
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }

  return (
    <>
      <div class="form-wrap">
        <form class="panel-wrap woocommerce" onSubmit={ handleSubmit }>
          { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
          <div id="order_data" class="panel woocommerce-order-data">
            { props?.quantity > 0 && range(quantity).map( ( index ) => {
              return (
                <AttendeeFields fields={ props.fields } attendee={ props.attendees[index] } index={ index } disabled={ isDisabled } />
              );
            })}

            { props?.quantity > 0 && 
            <div class="form-field">
              <button disabled={ isDisabled } type="submit" class="button save_order button-primary" name="save" value="Create">{ buttonText }</button>
              { isLoading && <Spinner/> }
            </div>}
          </div>
        </form>

      </div> 
    </>
  );
};

export { Attendees };
