
import { useContext, useState } from '@wordpress/element';

import { PredictiveSearchInput } from './predictive-search-input';
import { getAttendeeAcfValueByField } from './attendee-utils';

import { AttendeeContext } from './attendee-context';

const PredictiveSearchFields = props => {

  const field = props.field;
  const index = props.index;
  const nonce = props.nonce;
  const quantity = props.quantity;

  const attendee = useContext( AttendeeContext );

  function handleSelect( value ) {
    props.onChange( value );
  }

  /**
   * The AttendeeForm runs a client side check for duplicate employee numbers on it's submit event.
   * If a duplicate employee number is found the AttendeeForm sets a custom client side validation error on the relevant input.
   * This component is clearing the custom validation error on it's input event, because the
   * AttendeeForm's submit event will not fire when a custom validation error is present.
   *
   * @see AttendeeForm
   */
  function handleInput( e ) {
		if( ! e.target.validity.valid ) {
			clearCustomValidationErrors( quantity, field.name );
		}
  }

  /**
   * @param {Number} quantity Order quantity
   * @param {String} name Name of acf field
   */
  function clearCustomValidationErrors( quantity, name ) {
    for( let index=0; index<quantity; index++) {
      const input = document.querySelector(`input[name="attendees[${index}]['acf']['${name}']"]`);
      if( input ) {
				input.setCustomValidity("");
      }
    }
  }

  return (
    <div class="form-field form-row">
      <label for={ `attendee[${index}]['${field.key}']` }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>

      { field.type === 'text' && field.name === 'first_name' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } acfClarifyingFieldName="last_name" helpText="Enter or search for existing first names" id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } defaultValue={ getAttendeeAcfValueByField( field, attendee ) } maxlength={ field.maxlength} required={ !!field.required } onChange={ handleSelect } onInput={ handleInput } /> }

      { field.type === 'text' && field.name === 'last_name' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } acfClarifyingFieldName="first_name" helpText="Enter or search for existing last names" id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } defaultValue={ getAttendeeAcfValueByField( field, attendee ) } maxlength={ field.maxlength} required={ !!field.required } onChange={ handleSelect } onInput={ handleInput } /> }

      { field.type === 'text' && field.name === 'employee_number' && <PredictiveSearchInput capitalise={ true } nonce={ nonce } acfFieldName={ field.name } helpText="Enter or search for existing employee numbers" id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } defaultValue={ getAttendeeAcfValueByField( field, attendee ) } maxlength={ field.maxlength} required={ !!field.required } onChange={ handleSelect } onInput={ handleInput } /> }

    </div>
  );
};

export {
  PredictiveSearchFields
};
