import { useEffect, useState, useRef } from '@wordpress/element';

const TextInput = props => {

  const input = useRef(null);

  function handleInput(e) {
    input.current.value = e.targe.value;
  }

  return (
      <input name={ props.name } type="text" ref={ input } defaultValue={ props.default } disabled={ props.disabled } onInput={ handleInput } />
  );

};

export { TextInput };
