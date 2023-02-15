import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import { TextInput, SelectInput, EmailInput, DateInput, NumberInput } from './acf-inputs';

const AttendeeFields = props => {

  return (
    <>
      <h3>Attendee { props.index+1 }</h3>

      { props?.attendee?.ID && <input type="hidden" name={ `attendees[${props.index}]['id']` } value={ props.attendee.ID } /> }
      { props?.attendee?.post_status && <input type="hidden" name={ `attendees[${props.index}]['status']` } value={ props.attendee.post_status } /> }
      
      { props?.fields.map( field => {
        return (
          <div class="form-field">
            <label for={ field.key }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>

            { field.type === 'text' && <TextInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ props?.attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }  /> }

            { field.type === 'email' && <EmailInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={  props?.attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } /> }

            { field.type === 'textarea' && <textarea id={ field.key } disabled={ props.disabled } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } defaultValue={  props?.attendee?.acf[field.name] || field.default_value } /> }

            { field.type === 'date_picker' && <DateInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } defaultValue={  props?.attendee?.acf[field.name] || field.default_value } /> }

            { field.type === 'true_false' && <input type="checkbox" id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } required={ !!field.required } defaultValue={  props?.attendee?.acf[field.name] || field.default_value } /> }

            { field.type === 'number' && <NumberInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } defaultValue={  props?.attendee?.acf[field.name] || field.default_value } /> }

            { field.type === 'select' && <SelectInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } required={ !!field.required } defaultValue={ props?.attendee?.acf[field.name] || field.default_value || "" }>
              { Object.keys(field.choices).map( ( key, index ) => {
                return <option key={ key } value={ field.name === 'local_authority' ? key : field.choices[key] }>{ field.choices[key] }</option>
              } ) }
            </SelectInput> }

          </div>
        )
      } ) }
      <hr/>
    </>
  );
};

export { AttendeeFields };
