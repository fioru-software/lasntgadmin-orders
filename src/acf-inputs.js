import { useEffect, useState, useRef } from '@wordpress/element';
import { DateTime } from "luxon";
import { isNil } from 'lodash';
import { __ } from '@wordpress/i18n';

const SelectInput = props => {

  const [ value, setValue ] = useState("");

  useEffect( () => {
    setValue(props.defaultValue);
  }, [ props.defaultValue]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <select id={ props.id } name={ props.name } disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } required={ props?.required || false } value={ value } onChange={ handleChange } onFocus={ props?.handleFocus }>
      { ! props.value && ! props.defaultValue && <option disabled value="">{ __( 'Please select', 'lasntgadmin' ) }</option> }
      { props.children }
    </select> 
  );

}

const TrueFalse = props => {

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
    <input type="checkbox" id={ props.id } name={ props.name} disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } required={ props?.required } onClick={ handleClick } checked={ checked } value={ checked } onFocus={ props?.handleFocus }/>
  );
};

const CoursePrerequisitesMetCheckBox = props => {

  const [ checked, setChecked ] = useState(false);
  const [ disabled, setDisabled ] = useState(false);

  /**
   * Only disable input when course prerequisites have already been accepted for this course
   */
  useEffect( () => {
    if( ! isNil( props?.productIds ) && Array.isArray( props?.productIds) ) {
      const productIds = props.productIds.map( Number );
      if( productIds.includes( parseInt(props.defaultValue) ) ) {
        setChecked(true);
        setDisabled( props?.disabled || props?.readOnly );
      }
    }
  }, [ props?.disabled, props?.readOnly ]);

  function handleClick(e) {
    setChecked(e.target.checked);
  }

  return (
    <input type="checkbox" id={ props.id } name={ props.name} disabled={ disabled } required={ props?.required } onClick={ handleClick } checked={ checked } defaultValue={ props.defaultValue } onFocus={ props?.handleFocus }/>
  );
};

const TextInput = props => {

  const textInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="text" ref={ textInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern }  disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } onFocus={ props?.handleFocus }/>
  );

};

const TextArea = props => {

  const textInput = useRef(null);

  return (
    <textarea id={ props?.id } ref={ textInput } disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } name={ props?.name } defaultValue={  props?.defaultValue } required={ props?.required } handleFocus={ props?.handleFocus } /> 
  );

};

const EmailInput = props => {

  const emailInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="email" ref={ emailInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^[^@\s]+@[^@\s]+\.[^@\s]+$" } disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } onFocus={ props?.handleFocus } />
  );

};

const DateInput = props => {

  const dateInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props?.defaultValue ) ) {
      let dt = DateTime.fromISO( props.defaultValue );
      if(dt.invalid) {
        dt = DateTime.fromFormat(props.defaultValue, 'dd/MM/yyyy' );
      }
      dateInput.current.value = dt.toISODate();
    } else {
      dateInput.current.value = null;
    }
  }, [ props?.defaultValue ]);

  return (
    <input name={ props.name } id={ props.id } type="date" ref={ dateInput } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } disabled={ props?.disabled || ( ! isNil(props?.defaultValue) && props?.readOnly ) } onFocus={ props?.handleFocus } />
  );

};

const NumberInput = props => {

  const numberInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props?.defaultValue ) ) {
      numberInput.current.value = parseInt( props.defaultValue );
    }
  }, [ props?.defaultValue ]);

  return (
    <input name={ props.name } id={ props.id } type="number" ref={ numberInput } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^\d+" } max={ props?.max } min={ props?.min || 0 } step={ props?.step || 1 } disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } onChange={ props?.onChange } value={ props?.value } onFocus={ props?.handleFocus } />
  );

};

const TelInput = props => {

  const telInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="tel" ref={ telInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "[0-9+\s]+"} disabled={ props?.disabled || ( props?.defaultValue !== '' && props?.readOnly ) } onFocus={ props?.handleFocus } />
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
  CoursePrerequisitesMetCheckBox,
  TrueFalse
};
