import { useEffect, useState, useRef } from '@wordpress/element';
import { DateTime } from "luxon";
import { isBoolean, isArray, isNil } from 'lodash';
import { __ } from '@wordpress/i18n';

const SelectInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props?.value ) ) {
      setValue( props.value );
    }
  }, [ props.value ]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <select id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } value={ value } onChange={ handleChange } >
        { ! props.value && <option disabled value="">{ __( 'Please select', 'lasntgadmin' ) }</option> }
        { props.children }
      </select> 
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } />}
    </>
  );

}

const TrueFalse = props => {

  const [ checked, setChecked ] = useState(false);

  useEffect( () => {
    if( ! isBoolean( props.checked ) ) {
      setChecked( props.checked);
    }
  }, [ props?.checked ]);

  function handleChange( e ) {
    props.checked = e.target.checked;
    setChecked( e.target.checked );
  }

  return (
    <>
      <input type="checkbox" id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } checked={ props.checked } onChange={ handleChange } />
      { props?.disabled && <input type="hidden" name={ props.name } value={ checked } />}
    </>
  );
};

const Checkbox = props => {

  const [ checked, setChecked ] = useState(false);

  useEffect( () => {
    if( isArray( props.checked ) ) {
      setChecked( props.checked.map(Number).includes( props.value ) );
    }
  }, [ props?.checked ]);

  function handleChange( e ) {
    props.checked = e.target.checked;
    setChecked( e.target.checked );
  }

  return (
    <>
      <input type="checkbox" id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } checked={ checked } onChange={ handleChange } value={ props.value } />
      { props?.disabled && <input type="hidden" name={ props.name } value={ checked } />}
    </>
  );
}

const TextInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      setValue( props.value);
    }
  }, [ props.value]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <input name={ props.name } id={ props.id } type="text" maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } value={ value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern }  disabled={ props?.disabled || false } onChange={ handleChange }/>
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } />}
    </>
  );

};

const EmailInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      setValue( props.value);
    }
  }, [ props.value]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <input name={ props.name } id={ props.id } type="email" maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } value={ value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^[^@\s]+@[^@\s]+\.[^@\s]+$" } disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } /> }
    </>
  );

};

const TextArea = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      setValue( props.value);
    }
  }, [ props.value]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <textarea id={ props?.id } disabled={ props?.disabled || false } name={ props?.name } value={  value } required={ props?.required } onChange={ handleChange } /> 
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } /> }
    </>

  );

};

const DateInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props?.value ) ) {
      let dt = DateTime.fromISO( props.value );
      if(dt.invalid) {
        dt = DateTime.fromFormat(props.value, 'dd/MM/yyyy' );
      }
      setValue( dt.toISODate() );
    }
  }, [ props.value ]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <input name={ props.name } id={ props.id } type="date" value={ value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } disabled={ props?.disabled || false }  onChange={ handleChange } />
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } /> }
    </>
  );

};

const NumberInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props?.value ) ) {
      setValue( parseInt( props.value ) );
    }
  }, [ props?.value ]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <input name={ props.name } id={ props.id } type="number" value={ value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^\d+" } max={ props?.max } min={ props?.min || 0 } step={ props?.step || 1 } disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } /> }
    </>
  );

};

const TelInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    if( ! isNil( props?.value ) ) {
      setValue( props.value );
    }
  }, [ props?.value ]);

  function handleChange(e) {
    props.value = e.target.value;
    setValue(e.target.value);
  }

  return (
    <>
      <input name={ props.name } id={ props.id } type="tel" maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } value={ value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "[0-9+\s]+"} disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input type="hidden" name={ props.name } value={ value } /> }
    </>
  );

};

export { 
  SelectInput,
  TextInput,
  TextArea,
  EmailInput,
  DateInput,
  NumberInput,
  TelInput,
  Checkbox,
  TrueFalse
};
