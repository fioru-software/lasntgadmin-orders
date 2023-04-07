
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { Option } from './option.js';

const StatusSelector = props => {

  const [statuses, setStatuses] = useState([]);
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  /**
   * Default order status
   */
  useEffect( () => {
    if( props?.order?.status !== 'auto-draft' && props?.user?.allcaps?.view_others_shop_orders ) {
      setIsDisabled(false);
    }
  }, [ props?.order?.status ] );

  /**
   * User changed the order status
   */
  useEffect( () => {
  }, [ props.status ]);

  /**
   * Fetch list of statuses
   */
  useEffect( () => {
    async function runFetch() {
      try {
        setIsLoading(true);
        apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
        const statuses = await apiFetch( {
          path: `${props.apiPath}/statuses`,
          method: 'GET'
        } );
        if( ! statuses.length ) {
          setNotice({
            status: 'warning',
            message: 'Failed fetching order statuses.'
          });
        }
        setStatuses( statuses );
      } catch (e) {
        setNotice({
          status: 'error',
          message: e.message
        });
        console.error(e);
      }
      setIsLoading(false);
    }
    runFetch();
  }, []);

  function handleChange(e) {
    props.setStatus(e.target.value);
  }

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ isDisabled } required value={ props.status } onChange={ handleChange } >
        { props.status === 'auto-draft' &&
        <option selected value="auto-draft">Draft</option>
        }
        { props.status !== 'auto-draft' && 
        <option selected disabled value="">Please select</option>
        }
        { statuses.map( status => 
          <Option value={ status.id }>{ status.name }</Option>
        )}
      </select> }
      { props.status !== 'auto-draft' &&
        <input type="hidden" name={ props.name } value={ props?.status } />
      }
    </>
  );

}

export { StatusSelector };

