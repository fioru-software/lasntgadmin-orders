import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';


/**
 * @param { string } nonce 
 * @param { object } order
 * @param { string } groupId
 */
const Payment = props => {

  const [ notice, setNotice ] = useState(null);
  const [ isDisabled, setIsDisabled ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ buttonText, setButtonText ] = useState("Save");
  const [ paymentGateways, setPaymentGateways ] = useState([]);

  useEffect( async () => {
    await fetchPaymentGateways() 
  }, []);

  async function fetchPaymentGateways() {
    try {
      setNotice({
        status: 'info',
        message: 'Fetching payment gateways...'
      });
      setIsLoading(true);
      setIsDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      const paymentGateways = await apiFetch( 
        {
          path: '/wc/v3/payment_gateways',
          method: 'GET'
        } 
      );
      setPaymentGateways(
        paymentGateways.filter( pm => pm.enabled )
      );
      setNotice({
        status: 'success',
        message: 'Fetched payment gateways.'
      });
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      <ul>
        { paymentGateways.map( pg => {
          return <p>{ pg.title }</p>
        })}
      </ul>
    </>
  );

};

export {
  Payment
}
