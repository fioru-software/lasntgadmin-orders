
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Option } from './option.js';
import { isDraftStatus } from '../order-utils.js';

const StatusSelector = props => {

  const [statuses, setStatuses] = useState([]);
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  /**
   * Default order status
   */
  useEffect( () => {
    if( props?.user?.allcaps?.view_others_shop_orders ) {
      setIsDisabled( props.disabled );
    }
  }, [ props?.disabled ] );

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
            message: __( 'Failed fetching enrolment statuses.', 'lasntgadmin' )
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
      { !isLoading && <select id={ props.id } disabled={ props.disabled } required value={ props.status } onChange={ handleChange } >
        { isDraftStatus( props.status ) &&
        <option selected value="auto-draft">{ __( 'Draft', 'lasntgadmin' ) }</option>
        }
        { ! isDraftStatus( props.status ) && 
        <option selected disabled value="">{ __( 'Please select', 'lasntgadmin' ) }</option>
        }
        { statuses.map( status => 
          <Option value={ status.id }>{ status.name }</Option>
        )}
      </select> }
      { ! isDraftStatus( props.status ) &&
        <input type="hidden" name={ props.name } value={ props?.status } />
      }
    </>
  );

}

export { StatusSelector };

