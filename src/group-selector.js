
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';

const GroupSelector = props => {

  const [groupId, setGroupId] = useState(null);
  const [groups, setGroups] = useState([]);
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if(props.groupId) {
      setGroupId(props.groupId);
    }
  }, [ props.groupId ]);

  useEffect( async () => {
    try {
      setIsLoading(true);
      setIsDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      const groups = await apiFetch( {
        path: `${props.apiPath}`,
        method: 'GET'
      } );
      if( ! groups.length ) {
        setNotice({
          status: 'warning',
          message: 'You are not a member of any groups.'
        });
      }
      setGroups(groups);
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
    }
    setIsLoading(false);

    /**
     * Changing group is not allowed when editing an order
     * as it also impacts which products are available
     * and since the order already contains line items
     * this will cause unecessary complexity
     */
    if( ! props.groupId ) {
      setIsDisabled(false);
    }

  }, []);

  function handleChange(e) {
    props.setGroupId(e.target.value);
  }

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ isDisabled } required onChange={ handleChange } value={ groupId } >
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

