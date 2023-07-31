
import { useState, useEffect } from '@wordpress/element';

const Option = props => {

  const [selected, setSelected] = useState(false);

  useEffect( () => {
    if( props.selected === props.value) {
      setSelected(true);
    } 
  }, [props.selected]);

  return (
    <option key={ props.value } selected={ selected } value={ props.value }>{ props.children }</option>
  );

}

export { Option };

