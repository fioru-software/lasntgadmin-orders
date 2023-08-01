
import { useContext } from '@wordpress/element';

import { PredictiveSearchInput } from './predictive-search-input';

import { AttendeeContext } from './attendee-form-fieldset';

const PredictiveSearchFields = props => {

  const field = props.field;
  const index = props.index;
  const nonce = props.nonce;
  const disabled = props.disabled;

  const attendee = useContext( AttendeeContext );

  function handleSelect( value ) {
    props.onChange( value );
  }

  return (
    <div class="form-field form-row">
      <label for={ field.key }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>

      { field.type === 'text' && field.name === 'first_name' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } acfClarifyingFieldName="last_name" helpText="Enter or search for existing first names" name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } onChange={ handleSelect } /> }

      { field.type === 'text' && field.name === 'last_name' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } acfClarifyingFieldName="first_name" helpText="Enter or search for existing last names" name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } onChange={ handleSelect } /> }

      { field.type === 'text' && field.name === 'employee_number' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } helpText="Enter or search for existing employee numbers" name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } onChange={ handleSelect } /> }

    </div>
  );
};

export {
  PredictiveSearchFields
};
