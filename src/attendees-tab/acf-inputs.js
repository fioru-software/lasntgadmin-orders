import { useEffect, useState, useRef } from '@wordpress/element';
import { DateTime } from "luxon";
import { isBoolean, isArray, isNil } from 'lodash';
import { __ } from '@wordpress/i18n';

const SelectInput = props => {

  const selectInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      selectInput.current.value = props.value;
      if( props?.disabled ) {
        hiddenInput.current.value = props.value;
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      selectInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <select ref={ selectInput } id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } defaultValue={ props?.value } onChange={ handleChange } >
        { ! props.value && <option disabled value="">{ __( '- Select -', 'lasntgadmin' ) }</option> }
        { props.children }
      </select> 
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } />}
    </>
  );

}

const TrueFalse = props => {

  const checkInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( isBoolean( props.checked ) ) {
      checkInput.current.checked = props.checked;
      if( props?.disabled ) {
        hiddenInput.current.value = props.checked;
      }
    } else {
      checkInput.current.checked = false;
      if( props?.disabled ) {
        hiddenInput.current.value = false;
      }
    }
  }, [ props.checked ]);

  function handleChange( e ) {
    checkInput.current.checked = e.target.checked;
    if( props?.disabled ) {
      hiddenInput.current.value = e.target.checked;
    }
  }

  return (
    <>
      <input ref={ checkInput } type="checkbox" id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } defaultChecked={ props?.checked } onChange={ handleChange } />
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.checked } />}
    </>
  );

};

const Checkbox = props => {

  const checkInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.checked ) ) {
      if( isArray( props.checked ) ) {
        let checked = props.checked.map(Number).includes( props.value );
        checkInput.current.checked = checked;
        if( props?.disabled ) {
          hiddenInput.current.value = checked;
        }
      }
    } else {
      checkInput.current.checked = false;
      if( props?.disabled ) {
        hiddenInput.current.value = false;
      }
    }
  }, [ props.checked ]);

  function handleChange( e ) {
    checkInput.current.checked = e.target.checked;
    if( props?.disabled ) {
      hiddenInput.current.value = e.target.checked;
    }
  }

  return (
    <>
      <input ref={ checkInput } type="checkbox" id={ props.id } name={ props.name } disabled={ props?.disabled || false } required={ props?.required || false } defaultChecked={ props?.checked } onChange={ handleChange } value={ props.value } />
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.checked } />}
    </>
  );

};

const TextInput = props => {

  const textInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      textInput.current.value = props.value;
      if( props?.disabled ) {
        hiddenInput.current.value = props.value;
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      textInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <input ref={ textInput } name={ props.name } id={ props.id } type="text" maxLength={ props?.maxlength || 32 } minLength={ props?.minlength || 1 } defaultValue={ props?.value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern }  disabled={ props?.disabled || false } onChange={ handleChange }/>
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } />}
    </>
  );

};

const EmailInput = props => {

  const textInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      textInput.current.value = props.value;
      if( props?.disabled ) {
        hiddenInput.current.value = props.value;
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      textInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <input ref={ textInput } name={ props.name } id={ props.id } type="email" maxLength={ props?.maxlength || 32 } minLength={ props?.minlength || 1 } defaultValue={ props?.value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } /> }
    </>
  );

};

const TextArea = props => {

  const textInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      textInput.current.value = props.value;
      if( props?.disabled ) {
        hiddenInput.current.value = props.value;
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      textInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <textarea ref={ textInput } id={ props?.id } disabled={ props?.disabled || false } name={ props?.name } defaultValue={  props?.value } required={ props?.required } onChange={ handleChange } /> 
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } /> }
    </>

  );

};

const DateInput = props => {

  const dateInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props?.value ) ) {
      let dt = DateTime.fromISO( props.value );
      if(dt.invalid) {
        dt = DateTime.fromFormat(props.value, 'dd/MM/yyyy' );
      }
      dateInput.current.value = dt.toISODate();
      if( props?.disabled ) {
        hiddenInput.current.value = dt.toISODate();
      }
    } else {
      dateInput.current.value = "";
      if( props?.disabled ) {
        hiddenInput.current.value = "";
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      dateInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <input ref={ dateInput } name={ props.name } id={ props.id } type="date" defaultValue={ props?.value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } /> }
    </>
  );

};

const NumberInput = props => {

  const numberInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      numberInput.current.value = props.value;
      if( props?.disabled ) {
        hiddenInput.current.value = props.value;
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      numberInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <input ref={ numberInput } name={ props.name } id={ props.id } type="number" defaultValue={ props?.value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "^\d+" } max={ props?.max } min={ props?.min || 0 } step={ props?.step || 1 } disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } /> }
    </>
  );

};

const TelInput = props => {

  const telInput = useRef(null);
  const hiddenInput = useRef(null);

  useEffect( () => {
    if( ! isNil( props.value ) ) {
      telInput.current.value = props.value;
      if( props?.disabled ) {
        hiddenInput.current.value = props.value;
      }
    }
  }, [ props.value ]);

  function handleChange( e ) {
      telInput.current.value = e.target.value;
      if( props?.disabled ) {
        hiddenInput.current.value = e.target.value;
      }
  }

  return (
    <>
      <input ref={ telInput } name={ props.name } id={ props.id } type="tel" maxLength={ props?.maxlength || 32 } minLength={ props?.minlength || 1 } defaultValue={ props?.value } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern || "[0-9+\s]+"} disabled={ props?.disabled || false } onChange={ handleChange } />
      { props?.disabled && <input ref={ hiddenInput } type="hidden" name={ props.name } defaultValue={ props?.value } /> }
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
