
import { useContext, useState, useEffect } from '@wordpress/element';

import { TextArea, TextInput, SelectInput, EmailInput, DateInput, NumberInput, TrueFalse, Checkbox } from './acf-inputs';

import { __ } from '@wordpress/i18n';

import { AcfFieldsContext, ProductContext, AttendeeContext } from './attendee-context';

import { HiddenFields } from './attendee-form-fieldset-hidden-fields';
import { PredictiveSearchFields } from './attendee-form-fieldset-predictive-search-fields';

import { isNil, isArray } from 'lodash';

import { isCourseClosed } from '../product-utils';

const AttendeeFormFieldsetFields = props => {

  const attendee = useContext( AttendeeContext );
  const fields = useContext( AcfFieldsContext );
  const product = useContext( ProductContext );

  const index = parseInt( props.index );
  const quantity = parseInt( props.quantity );
  const groupId = parseInt( props.groupId );

  function isFieldDisabled() {
    return isCourseClosed( product.status );
  }

  return (
    <>
      <HiddenFields index={ index } groupId={ groupId }/>

      { isArray( fields ) && fields.map( field => {
        return (
          <>

            <PredictiveSearchFields quantity={ quantity } index={ index } field={ field } onChange={ props.setAttendee } />

            <div class="form-field form-row">

              { field.type === 'text' && field.name !== 'employee_number' && field.name !== 'last_name' && field.name !== 'first_name' && 
                <TextInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } value={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength } required={ !!field.required }  disabled={ isFieldDisabled() }/> 
              }

               { field.type === 'email' && <EmailInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } value={  attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength } required={ !!field.required } disabled={ isFieldDisabled() } /> }

              { field.type === 'textarea' && 
              <TextArea id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } value={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'date_picker' && 
                <DateInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } value={ attendee?.acf[field.name] || field.default_value } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'true_false' && 
                <TrueFalse id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ isFieldDisabled() } required={ !!field.required } checked={  attendee?.acf[field.name] || field.default_value } />
              }

              { field.type === 'checkbox' && field.name === 'course_prerequisites_met' &&
                <Checkbox id={ field.key } value={ product.id } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ isFieldDisabled() } required={ !!field.required } checked={ attendee?.acf?.course_prerequisites_met } />
              }

              { field.type === 'number' && 
                <NumberInput id={ field.key } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } value={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } disabled={ isFieldDisabled() } /> 
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
