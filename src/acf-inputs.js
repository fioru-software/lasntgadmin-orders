import { useEffect, useState, useRef } from '@wordpress/element';
import { DateTime } from "luxon";

const SelectInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    setValue(props.defaultValue);
  }, [ props.defaultValue]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <select id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } value={ value } onChange={ handleChange } >
      { ! props.value && ! props.defaultValue && <option disabled value="">Please select</option> }
      { props.children }
    </select> 
  );

}

const CheckBox = props => {

  const [ checked, setChecked ] = useState(false);
  const [ value, setValue ] = useState("");

  useEffect( () => {
    setChecked(props.defaultValue);
    setValue( props.defaultValue ? "On" : "Off" );
  }, [ props.defaultValue]);

  function handleClick(e) {
    setChecked(e.target.checked);
    setValue( e.target.checked ? "On" : "Off" );
  }

  return (
    <input type="checkbox" id={ props.id } name={ props.name} disabled={ props.disabled } required={ props?.required } onClick={ handleClick } checked={ checked } value={ checked } />
  );
};

const TextInput = props => {

  const textInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="text" ref={ textInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } readonly={ props?.readonly || false } disabled={ props?.disabled || false } />
  );

};

const EmailInput = props => {

  const emailInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="email" ref={ emailInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" } readonly={ props?.readonly || false } disabled={ props?.disabled || false } />
  );

};

const DateInput = props => {

  useEffect( () => {
    if( props.defaultValue) {
      const dt = DateTime.fromFormat(props.defaultValue, 'dd/MM/yyyy' );
      dateInput.current.value = dt.toISODate();
    }
  }, [ props.defaultValue ]);

  const dateInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="date" ref={ dateInput } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } readonly={ props?.readonly || false } disabled={ props?.disabled || false } />
  );

};

const NumberInput = props => {

  const numberInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="number" ref={ numberInput } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^\d+" } readonly={ props?.readonly || false } max={ props?.max } min={ props?.min || 0 } step={ props?.step || 1 } disabled={ props?.disabled || false } onChange={ props?.onChange } value={ props?.value } />
  );

};

const TelInput = props => {

  const telInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="tel" ref={ telInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "[0-9+\s]+"} readonly={ props?.readonly || false } disabled={ props?.disabled || false } />
  );

};

export { 
  SelectInput,
  TextInput,
  EmailInput,
  DateInput,
  NumberInput,
  TelInput,
  CheckBox
};
