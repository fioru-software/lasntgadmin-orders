
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { isUndefined, isNil } from "lodash";

/**
 * @param { number } productId
 * @param { number } groupId
 * @param { string } apiPath Group API path
 * @param { string } nonce
 * @param { function } handleGroupSelect
 */
const GroupSelector = props => {

  const [ groupId, setGroupId ] = useState("");
  const [ groups, setGroups ] = useState([]);
  const [ notice, setNotice ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isDisabled, setIsDisabled ] = useState(true);

  useEffect( () => {
    if( ! isNil( props.disabled ) ) {
      setIsDisabled( props.disabled );
    }
  }, [props?.disabled]);

  useEffect(() => {
    if( ! isNil( props.groupId) ) {
      setGroupId(props.groupId);
    }
  }, [ props?.groupId ]);

  useEffect( () => {
    if( ! isNil(props.productId) ) {

      async function runFetch() {
        try {
          setIsLoading(true);
          apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
          const groups = await apiFetch( {
            path: `${props.apiPath}/${props.productId}`,
            method: 'GET'
          } );
          if( ! groups.length ) {
            setNotice({
              status: 'warning',
              message: __( 'You are not a member of any groups.', 'lasntgadmin' )
            });
          }
          setGroups(groups);
          props.onFetch(groups);
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
    }
  }, [ props?.productId ]);

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ props.disabled } required onChange={ props.onChange } value={ groupId }>
        <option disabled value="">Please select</option> 
        { groups.map( (group) => {
          return <option key={ group.group_id.toString() } value={ group.group_id } >{ group.name }</option>
        })}
      </select> }
      <input type="hidden" name={ props.name } defaultValue={ groupId } />
    </>
  );

}

export { GroupSelector };

