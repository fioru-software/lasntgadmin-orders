import { useEffect, useState, useRef } from '@wordpress/element';

const TextInput = props => {

  const textInput = useRef(null);

  return (
    <input name={ props.name } id={ props.id } type="text" ref={ textInput } defaultValue={ props.default } required={ props.required} pattern={ props.pattern } disabled={ props.disabled } />
  );

};

export { TextInput };
