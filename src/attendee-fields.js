import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import { AttendeeSearch } from './attendee-search';
import { TextInput, SelectInput, EmailInput, DateInput, NumberInput, CheckBox } from './acf-inputs';
import { isNil } from 'lodash';
import { __ } from '@wordpress/i18n';

/**
 * @param { string } nonce @param { array } fields
 * @param { object } attendee
 * @param { number } index
 * @param { disabled } bool
 */
const AttendeeFields = props => {

  const [ attendee, setAttendee ] = useState(null);
  const [ attendeeSearchOptions, setAttendeeSearchOptions ] = useState([]);

  useEffect( () => {
    if( ! isNil( props.attendee ) ) {
      setAttendee( props.attendee );
    }
  }, [ props.attendee ]);

  function handleAttendeeSearchSelect( attendee ) {
    setAttendee( attendee );
    setAttendeeSearchOptions([]);
  }

  function handleAttendeeSearchFocus() {
    setAttendeeSearchOptions([]);
  }

  return (
    <>
      <h3>{ __( `Attendee ${ props.index+1 }`, 'lasntgadmin' ) }</h3>

      { ( props?.attendee?.ID || attendee?.id ) && <input type="hidden" name={ `attendees[${props.index}]['id']` } value={ props?.attendee?.ID || attendee?.id } /> }
      { ( props?.attendee?.post_status || attendee?.status ) && <input type="hidden" name={ `attendees[${props.index}]['status']` } value={ props?.attendee?.post_status || attendee?.status } /> }
      { ( props?.attendee?.meta?.order_ids || attendee?.meta?.order_ids ) && <input type="hidden" name={ `attendees[${props.index}]['meta']['order_ids']` } value={ props?.attendee?.meta?.order_ids.join(',') || attendee?.meta?.order_ids.join(',') || '' } /> }
      { ( props?.attendee?.meta?.product_ids || attendee?.meta?.product_ids ) && <input type="hidden" name={ `attendees[${props.index}]['meta']['product_ids']` } value={ props?.attendee?.meta?.product_ids.join(',') || attendee?.meta?.product_ids.join(',') || '' } /> }
      { ( props?.attendee?.meta['groups-read'] || attendee?.meta['groups-read'] ) && <input type="hidden" name={ `attendees[${props.index}]['meta']['groups-read']` } value={ props?.attendee?.meta['groups-read'].join(',') || attendee?.meta['groups-read'].join(',') || '' } /> }

      { props?.fields.map( field => {
        return (
          <div class="form-field">
            <fieldset>
              <p class="form-row">
                  <label for={ field.key }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>


                  { field.type === 'text' && field.name !== 'employee_number' && field.name !== 'last_name' && field.name !== 'first_name' && <TextInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } handleFocus={ handleAttendeeSearchFocus } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }  /> }

                  { field.type === 'text' && field.name === 'employee_number' && <AttendeeSearch options={ attendeeSearchOptions } handleFocus={ handleAttendeeSearchFocus } nonce={ props.nonce } acfFieldName={ field.name } handleSelect={ handleAttendeeSearchSelect } helpText="Enter or search for existing employee numbers" name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } /> }

                  { field.type === 'text' && field.name === 'last_name' && <AttendeeSearch options={ attendeeSearchOptions } handleFocus={ handleAttendeeSearchFocus } nonce={ props.nonce } acfFieldName={ field.name } acfClarifyingFieldName="first_name" handleSelect={ handleAttendeeSearchSelect } helpText="Enter or search for existing last names" name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }/> }

                  { field.type === 'text' && field.name === 'first_name' && <AttendeeSearch options={ attendeeSearchOptions } handleFocus={ handleAttendeeSearchFocus } nonce={ props.nonce } acfFieldName={ field.name } acfClarifyingFieldName="last_name" handleSelect={ handleAttendeeSearchSelect } helpText="Enter or search for existing first names" name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }/> }

                  { field.type === 'email' && <EmailInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={  attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } onFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'textarea' && <textarea id={ field.key } disabled={ props.disabled } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'date_picker' && <DateInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'true_false' && <CheckBox id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } required={ !!field.required } defaultValue={  attendee?.acf[field.name] || field.default_value } handleFocus={ handleAttendeeSearchFocus } /> }

            { field.type === 'number' && <NumberInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } handleFocus={ handleAttendeeSearchFocus } /> }

                  { field.type === 'select' && <SelectInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } required={ !!field.required } defaultValue={ attendee?.acf[field.name] || field.default_value || "" } handleFocus={ handleAttendeeSearchFocus }>
                    { Object.keys(field.choices).map( ( key, index ) => {
                      return <option key={ key } value={ field.name === 'local_authority' ? key : field.choices[key] }>{ field.choices[key] }</option>
                    } ) }
                  </SelectInput> }
              </p>
            </fieldset>

          </div>
        )
      } ) }
      <hr/>
    </>
  );
};

export { AttendeeFields };
