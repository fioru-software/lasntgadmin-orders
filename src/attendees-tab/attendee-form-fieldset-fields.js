
import { useContext, useState, useEffect } from '@wordpress/element';

import { TextArea, TextInput, SelectInput, EmailInput, DateInput, NumberInput, CoursePrerequisitesMetCheckBox, TrueFalse } from './acf-inputs';

import { __ } from '@wordpress/i18n';

import { AcfFieldsContext, ProductContext } from './attendee-context';
import { AttendeeContext } from './attendee-form-fieldset';

import { HiddenFields } from './attendee-form-fieldset-hidden-fields';
import { PredictiveSearchFields } from './attendee-form-fieldset-predictive-search-fields';

import { isNil } from 'lodash';

import { isCourseClosed } from '../product-utils';

const AttendeeFormFieldsetFields = props => {

  const attendee = useContext( AttendeeContext );
  const fields = useContext( AcfFieldsContext );
  const product = useContext( ProductContext );

  const index = props.index;

  function isFieldDisabled() {
    return isCourseClosed( product.status );
  }

  return (
    <>
      <HiddenFields index={ index } />

      { fields.map( field => {
        return (
          <>

            <PredictiveSearchFields index={ index } field={ field } onChange={ props.setAttendee } />

            <div class="form-field form-row">

              { field.type === 'text' && field.name !== 'employee_number' && field.name !== 'last_name' && field.name !== 'first_name' && 
                <TextInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength } required={ !!field.required }  disabled={ isFieldDisabled() }/> 
              }

               { field.type === 'email' && <EmailInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } defaultValue={  attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength } required={ !!field.required } disabled={ isFieldDisabled() } /> }

              { field.type === 'textarea' && 
              <TextArea id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'date_picker' && 
                <DateInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'true_false' && 
                <TrueFalse id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } required={ !!field.required } defaultValue={  attendee?.acf[field.name] || field.default_value } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'checkbox' && field.name === 'course_prerequisites_met' && 
                <CoursePrerequisitesMetCheckBox id={ field.key } productIds={ attendee?.acf?.course_prerequisites_met } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } required={ !!field.required } defaultValue={ product.id } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'number' && 
                <NumberInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'select' && 
                <SelectInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } required={ !!field.required } value={ attendee?.acf[field.name] || field.default_value || "" } disabled={ isFieldDisabled() } >
                  { Object.keys(field.choices).map( ( key, index ) => {
                    return <option key={ key } value={ field.name === 'local_authority' ? key : field.choices[key] }>{ field.choices[key] }</option>
                  } ) }
                </SelectInput> 
              }

            </div>
          </>
        )
      })}
    </>
  );
};

export { AttendeeFormFieldsetFields };
