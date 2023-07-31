
import { PredictiveSearchInput } from './predictive-search-input';

const PredictiveSearchFields = ({ 
  field, index, nonce, disabled, attendee 
}) => {

  return (
    <div class="form-field form-row">
      <label for={ field.key }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>

      { field.type === 'text' && field.name === 'employee_number' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } helpText="Enter or search for existing employee numbers" name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } /> }

      { field.type === 'text' && field.name === 'last_name' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } acfClarifyingFieldName="first_name" helpText="Enter or search for existing last names" name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }/> }

      { field.type === 'text' && field.name === 'first_name' && <PredictiveSearchInput nonce={ nonce } acfFieldName={ field.name } acfClarifyingFieldName="last_name" helpText="Enter or search for existing first names" name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }/> }

    </div>
  );
};

export {
  PredictiveSearchFields
};
