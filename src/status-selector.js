
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

  useEffect( async () => {
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
      setStatuses(statuses);
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } name={ props.name } disabled={ isDisabled } required >
        <option selected disabled value="">Please select</option>
        { statuses.map( status => 
          <Option value={ status.id } selected={ props.status }>{ status.name }</Option>
        )}
      </select> }
    </>
  );

}

export { StatusSelector };

