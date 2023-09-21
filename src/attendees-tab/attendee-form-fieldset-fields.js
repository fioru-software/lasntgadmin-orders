
import { useContext, useState, useEffect } from '@wordpress/element';

import { TextArea, TextInput, SelectInput, EmailInput, DateInput, NumberInput, TrueFalse, CoursePrerequisitesMetCheckbox } from './acf-inputs';

import { __ } from '@wordpress/i18n';

import { AcfFieldsContext, ProductContext, AttendeeContext } from './attendee-context';

import { HiddenFields } from './attendee-form-fieldset-hidden-fields';
import { PredictiveSearchFields } from './attendee-form-fieldset-predictive-search-fields';

import { isNil, isArray } from 'lodash';

import { getAttendeeAcfValueByField } from './attendee-utils';

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
          <div key={ `attendees[${index}]['${field.prefix}']['${field.name}']` } >

            <div className="form-field form-row">

              <label htmlFor={ `attendee[${index}]['${field.key}']` }>{ field.label }{ !!field.required && <span className="required"> *</span> }</label>
              { field.instructions && <p className="description">{ field.instructions }</p> }

              <PredictiveSearchFields quantity={ quantity } index={ index } field={ field } onChange={ props.setAttendee } />

              { field.type === 'text' && field.name !== 'employee_number' && field.name !== 'last_name' && field.name !== 'first_name' && 
                <TextInput id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } value={ getAttendeeAcfValueByField( field, attendee ) } maxLength={ field.maxlength } required={ !!field.required }  disabled={ isFieldDisabled() }/> 
              }

              { field.type === 'email' && <EmailInput id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } placeholder={ field.placeholder } value={  getAttendeeAcfValueByField( field, attendee ) } maxLength={ field.maxlength } required={ !!field.required } disabled={ isFieldDisabled() } /> }

              { field.type === 'textarea' && 
              <TextArea id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } value={  getAttendeeAcfValueByField( field, attendee ) } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'date_picker' && 
                <DateInput id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } value={ getAttendeeAcfValueByField( field, attendee ) } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'true_false' && 
                <TrueFalse id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ isFieldDisabled() } required={ !!field.required } checked={  getAttendeeAcfValueByField( field, attendee ) } />
              }

              { field.type === 'checkbox' && field.name === 'course_prerequisites_met' && 
                <CoursePrerequisitesMetCheckbox id={ `attendee[${index}]['${field.key}']` } value={ product.id } instructions={ field.instructions } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } disabled={ isFieldDisabled() } required={ !!field.required } checked={ attendee?.acf?.course_prerequisites_met } />
              }

              { field.type === 'number' && 
                <NumberInput id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } value={  getAttendeeAcfValueByField( field, attendee ) } required={ !!field.required } disabled={ isFieldDisabled() } /> 
              }

              { field.type === 'select' && 
                <SelectInput id={ `attendee[${index}]['${field.key}']` } name={ `attendees[${index}]['${field.prefix}']['${field.name}']` } required={ !!field.required } value={ getAttendeeAcfValueByField( field, attendee ) } disabled={ isFieldDisabled() } >
                  { Object.keys(field.choices).map( ( key, index ) => {
                    return <option key={ key } value={ field.name === 'local_authority' ? key : field.choices[key] }>{ field.choices[key] }</option>
                  } ) }
                </SelectInput> 
              }

            </div>
          </div>
        )
      })}
    </>
  );
};

export { AttendeeFormFieldsetFields };
