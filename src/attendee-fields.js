
import { useState, useEffect, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Notice, Spinner } from '@wordpress/components';
import { AttendeeSearch } from './attendee-search';
import { TextArea, TextInput, SelectInput, EmailInput, DateInput, NumberInput, CoursePrerequisitesMetCheckBox, TrueFalse } from './acf-inputs';
import { isNil } from 'lodash';
import { __ } from '@wordpress/i18n';
import { findOrderMetaByKey, getUpdateOrderRequestBody, getUpdateAttendeeRequestBody } from './order-utils';

/**
 * @param { string } nonce @param { array } fields
 * @param { object } attendee
 * @param { number } index
 * @param { disabled } bool
 * @param { object } product
 */
const AttendeeFields = props => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);
  const [ attendee, setAttendee ] = useState(null);
  const [ attendeeSearchOptions, setAttendeeSearchOptions ] = useState([]);
  const [ readOnly, setReadOnly ] = useState( false );

  // @todo remove
  useEffect( () => {
    if( !isNil(props.order)) {
      console.log(props.order);
    }
  }, [ props.order ]);

  // @todo remove
  useEffect( () => {
    if( !isNil(props.product)) {
      console.log(props.product);
    }
  }, [ props.product ]);

  useEffect( () => {
    if( ! isNil( props.attendee ) ) {
      setAttendee( props.attendee );
      setReadOnly( true );
    }
  }, [ props.attendee ]);

  function handleAttendeeSearchSelect( attendee ) {
    setAttendee( attendee );
    setReadOnly( true );
    setAttendeeSearchOptions([]);
  }

  function handleAttendeeSearchFocus() {
    setAttendeeSearchOptions([]);
  }

  function handleResetAttendee() {
    setAttendee( null );
    setReadOnly( false );
  }

  /**
   * @todo
   */
  async function handleRemoveAttendee(e) {
    e.preventDefault();
    try {
      setNotice({
        status: 'info',
        message: 'Removing attendee...'
      });
      setIsLoading(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );

      setNotice({
        status: 'info',
        message: 'Removing attendee from order...'
      });

      const updateAttendeeRequestBody = getUpdateAttendeeRequestBody( 
        props.order.id, 
        attendee.ID,
        props.nonce,
        {
          meta: {
            product_ids: [ ... new Set(
              attendee?.meta?.product_ids.map(Number).filter(Number).filter( product_id => product_id !== parseInt( props.productId ) )
            )],
            order_ids: [ ... new Set(
              attendee?.meta?.order_ids.map(Number).filter(Number).filter( order_id => order_id !== parseInt( props.order.id ) )
            )]
          }
        }
      );
      console.log( updateAttendeeRequestBody );
      const attendeeRes = await apiFetch( 
        updateAttendeeRequestBody
      );
      console.log(attendeeRes);

      setNotice({
        status: 'success',
        message: 'Removed attendee from order.'
      });

      setNotice({
        status: 'info',
        message: 'Removing order from attendee...'
      });

      const updateOrderRequestBody = getUpdateOrderRequestBody(
        props.order.id,
        props.nonce,
        {
          line_items: props.line_items.map( item => {
            item.quantity -= 1;
          }),
          meta: {
            attendee_ids: [ ... new Set(
              props?.order?.meta_data.filter( meta => meta.key === 'attendee_ids' ).map( meta => parseInt(meta.value) ).filter( attendee_id => attendee_id !== parseInt( attendee.ID ) )
            )]
          }
        }
      );
      console.log(updateOrderRequestBody);
      const orderRes = await apiFetch(
        updateOrderRequestBody
      );

      console.log(orderRes);

      setNotice({
        status: 'success',
        message: 'Removed order from attendee.'
      });

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
      <h3>{ __( `Attendee ${ props.index+1 }`, 'lasntgadmin' ) }</h3>

      { ( props?.attendee?.ID || attendee?.id ) && <input type="hidden" name={ `attendees[${props.index}]['id']` } value={ props?.attendee?.ID || attendee?.id } /> }
      { ( props?.attendee?.post_status || attendee?.status ) && <input type="hidden" name={ `attendees[${props.index}]['status']` } value={ props?.attendee?.post_status || attendee?.status } /> }

      { attendee?.meta?.order_ids && attendee?.meta?.order_ids.map( orderId => <input type="hidden" name={ `attendees[${props.index}]['meta']['order_ids']` } value={ parseInt( orderId ) } /> ) }

      { attendee?.meta?.product_ids && attendee?.meta?.product_ids.map( productId => <input type="hidden" name={ `attendees[${props.index}]['meta']['product_ids']` } value={ parseInt( productId ) } /> ) }

      { attendee?.meta['groups-read'] && attendee?.meta['groups-read'].map( groupId => <input type="hidden" name={ `attendees[${props.index}]['meta']['groups-read']` } value={ parseInt( groupId ) } /> ) }
      
      { attendee?.acf?.course_prerequisites_met && attendee?.acf?.course_prerequisites_met.map( productId => <input type="hidden" name={ `attendees[${props.index}]['meta']['course_prerequisites_met']` } value={ parseInt( productId ) } /> ) }

      { props?.fields.map( field => {
        return (
          <div class="form-field">
            <fieldset>
              <p class="form-row">
                  <label for={ field.key }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>


                  { field.type === 'text' && field.name !== 'employee_number' && field.name !== 'last_name' && field.name !== 'first_name' && <TextInput id={ field.key } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } handleFocus={ handleAttendeeSearchFocus } readOnly={ readOnly } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }  /> }

                  { field.type === 'text' && field.name === 'employee_number' && <AttendeeSearch readOnly={ readOnly } options={ attendeeSearchOptions } handleFocus={ handleAttendeeSearchFocus } nonce={ props.nonce } acfFieldName={ field.name } handleSelect={ handleAttendeeSearchSelect } helpText="Enter or search for existing employee numbers" name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } /> }

                  { field.type === 'text' && field.name === 'last_name' && <AttendeeSearch readOnly={ readOnly } options={ attendeeSearchOptions } handleFocus={ handleAttendeeSearchFocus } nonce={ props.nonce } acfFieldName={ field.name } acfClarifyingFieldName="first_name" handleSelect={ handleAttendeeSearchSelect } helpText="Enter or search for existing last names" name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }/> }

                  { field.type === 'text' && field.name === 'first_name' && <AttendeeSearch readOnly={ readOnly } options={ attendeeSearchOptions } handleFocus={ handleAttendeeSearchFocus } nonce={ props.nonce } acfFieldName={ field.name } acfClarifyingFieldName="last_name" handleSelect={ handleAttendeeSearchSelect } helpText="Enter or search for existing first names" name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }/> }

                  { field.type === 'email' && <EmailInput id={ field.key } readOnly={ readOnly } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={  attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } onFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'textarea' && <TextArea id={ field.key } readOnly={ readOnly } disabled={ props.disabled } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'date_picker' && <DateInput id={ field.key } readOnly={ readOnly } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'true_false' && <TrueFalse id={ field.key } readOnly={ readOnly } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } required={ !!field.required } defaultValue={  attendee?.acf[field.name] || field.default_value } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'checkbox' && field.name === 'course_prerequisites_met' && <CoursePrerequisitesMetCheckBox id={ field.key } readOnly={ readOnly } productIds={ attendee?.acf?.course_prerequisites_met } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } required={ !!field.required } defaultValue={ props.productId } handleFocus={ handleAttendeeSearchFocus } /> }

            { field.type === 'number' && <NumberInput id={ field.key } readOnly={ readOnly } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'select' && <SelectInput id={ field.key } readOnly={ readOnly } name={ `attendees[${props.index}]['${field.prefix}']['${field.name}']` } disabled={ props.disabled } required={ !!field.required } defaultValue={ attendee?.acf[field.name] || field.default_value || "" } handleFocus={ handleAttendeeSearchFocus }>
                    { Object.keys(field.choices).map( ( key, index ) => {
                      return <option key={ key } value={ field.name === 'local_authority' ? key : field.choices[key] }>{ field.choices[key] }</option>
                    } ) }
                  </SelectInput> }
              </p>
            </fieldset>

          </div>
        )
      } ) }

      { readOnly && ! props.order.meta_data.filter( meta => meta.key === 'attendee_ids' ).map( meta => meta.value).map(Number).includes( attendee.ID ) && 
        <div class="form-field">
          <button type="button" class="button alt save_order wp-element-button" onClick={ handleResetAttendee } >{ __( 'Reset Attendee', 'lasntgadmin' ) }</button>
        </div>
      }

      { readOnly && props.order.meta_data.filter( meta => meta.key === 'attendee_ids' ).map( meta => meta.value ).map(Number).includes( attendee.ID ) && 
        <div class="form-field">
          { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
          <button type="button" disabled={ isLoading } class="button alt save_order wp-element-button" onClick={ handleRemoveAttendee } >{ __( 'Remove Attendee', 'lasntgadmin' ) }</button>
          { isLoading && <Spinner/> }
        </div>
      }

      <hr/>
    </>
  );
};

export { AttendeeFields };
