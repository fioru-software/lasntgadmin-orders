
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';

const CountySelector = props => {

  const [counties, setCounties] = useState([]);

  useEffect( () => {
    setCounties([
      { code: "CW", name: "Carlow" },
      { code: "CN", name: "Cavan" },
      { code: "CE", name: "Clare" },
      { code: "CO", name: "Cork" },
      { code: "DL", name: "Donegal" },
      { code: "D", name: "Dublin" },
      { code: "G", name: "Galway" }, 
      { code: "KY", name: "Kerry" },
      { code: "KE", name: "Kildare" },
      { code: "KK", name: "Kilkenny" },
      { code: "LS", name: "Laois" },
      { code: "LM", name: "Leitrim" },
      { code: "LK", name: "Limerick" },
      { code: "LD", name: "Longford" },
      { code: "LH", name: "Louth" },
      { code: "MO", name: "Mayo" },
      { code: "MH", name: "Meath" },
      { code: "MN", name: "Monaghan" },
      { code: "OY", name: "Offaly" },
      { code: "RN", name: "Roscommon" },
      { code: "SO", name: "Sligo" },
      { code: "TA", name: "Tipperary" },
      { code: "WD", name: "Waterford" },
      { code: "WH", name: "Westmeath" },
      { code: "WX", name: "Wexford" },
      { code: "WW", name: "Wicklow" }
    ]);
  }, []);

  return (
    <select id={ props.id } name={ props.name } required>
      { ! props.selected && <option selected disabled value="">Please select</option> }
      { counties.map( (county) => {
        if( props.selected === county.code ) {
          return <option selected key={ county.code } value={ county.code } >{ county.name }</option> 
        } else {
          return <option key={ county.code } value={ county.code } >{ county.name }</option> 
        }
      })}
    </select>
  );

}

export { CountySelector };

