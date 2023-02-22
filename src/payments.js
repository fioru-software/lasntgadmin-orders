import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';


/**
 * @param { number } quantity
 * @param { array } fields
 * @param { string } groupId
 * @param { string } nonce 
 * @param { object } order
 */
const Payments = props => {

  const [ notice, setNotice ] = useState(null);
  const [ quantity, setQuantity ] = useState(0);
  const [ isDisabled, setIsDisabled ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ buttonText, setButtonText ] = useState("Save");

  useEffect( () => {
  });

};

export {
  Payments
}
