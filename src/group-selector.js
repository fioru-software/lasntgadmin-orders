
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';

import { isNull, isUndefined } from "lodash";

/**
 * @param { number } productId
 * @param { number } groupId
 * @param { string } apiPath Group API path
 * @param { string } nonce
 * @param { function } handleGroupSelect
 */
const GroupSelector = props => {

  const [groupId, setGroupId] = useState(null);
  const [groups, setGroups] = useState([]);
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if( ! isUndefined( props.groupsId) ) {
      setGroupId(props.groupId);
    }
  }, [ props?.groupId ]);

  useEffect( async () => {
    if( ! isUndefined(props.productId) && ! isNull(props.productId) ) {
      try {
        setIsLoading(true);
        setIsDisabled(true);
        apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
        const groups = await apiFetch( {
          path: `${props.apiPath}/${props.productId}`,
          method: 'GET'
        } );
        if( ! groups.length ) {
          setNotice({
            status: 'warning',
            message: 'You are not a member of any groups.'
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
      setIsDisabled(false);
    }
  }, [ props.productId ]);

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ isDisabled } required onChange={ props.onChange } value={ groupId } defaultValue={ groupId }>
        { ! groupId && <option selected disabled value="">Please select</option> }
        { groups.map( (group) => {
          return <option key={ group.group_id.toString() } value={ group.group_id } >{ group.name }</option>
        })}
      </select> }
      <input type="hidden" name={ props.name } value={ groupId } />
    </>
  );

}

export { GroupSelector };

