import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import { AttendeeSearch } from './attendee-search';
import { TextInput, SelectInput, EmailInput, DateInput, NumberInput, CheckBox } from './acf-inputs';

const AttendeeFields = props => {

  const [ attendee, setAttendee ] = useState(null);

  useEffect( () => {
    if( props.attendee ) {
      setAttendee( props.attendee );
    }
  }, [ props.attendee ]);

  function handleAttendeeSelect( attendee ) {
    setAttendee( attendee );
  }

  return (
    <>
      <h3>Attendee { props.index+1 }</h3>

      { ( props?.attendee?.ID || attendee?.id ) && <input type="hidden" name={ `attendees[${props.index}]['id']` } value={ props?.attendee?.ID || attendee?.id } /> }
      { ( props?.attendee?.post_status || attendee?.status ) && <input type="hidden" name={ `attendees[${props.index}]['status']` } value={ props?.attendee?.post_status || attendee?.status } /> }

      { props?.fields.map( field => {
        return (
          <div class="form-field">
            <fieldset>
              <p class="form-row">
                  <label for={ field.key }>{ field.label }{ !!field.required && <span class="required"> *</span> }</label>


                  { field.type === 'text' && field.name !== 'employee_number' && <TextInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={ attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required }  /> }

                  { field.type === 'text' && field.name === 'employee_number' && <AttendeeSearch acfFieldName="employee_number" handleSelect={ handleAttendeeSelect } defaultValue={ attendee?.acf[field.name] || field.default_value } /> }

                  { field.type === 'email' && <EmailInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } placeholder={ field.placeholder } defaultValue={  attendee?.acf[field.name] || field.default_value } maxlength={ field.maxlength} required={ !!field.required } /> }

                  { field.type === 'textarea' && <textarea id={ field.key } disabled={ props.disabled } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } /> }

                  { field.type === 'date_picker' && <DateInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } /> }

                  { field.type === 'true_false' && <CheckBox id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } required={ !!field.required } defaultValue={  attendee?.acf[field.name] || field.default_value } /> }

            { field.type === 'number' && <NumberInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } defaultValue={  attendee?.acf[field.name] || field.default_value } required={ !!field.required } /> }

                  { field.type === 'select' && <SelectInput id={ field.key } name={ `attendees[${props.index}][${field.prefix}][${field.name}]` } disabled={ props.disabled } required={ !!field.required } defaultValue={ attendee?.acf[field.name] || field.default_value || "" }>
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
