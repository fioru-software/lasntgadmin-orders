
import { useState } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Decides which actions are available per attendee.
 */
const AttendeeFormFieldsetButtons = props => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);

  function handleResetAttendee() {
    console.log('TODO: reset attendee');
  }

  function handleRemoveAttendee() {
    console.log('TODO: remove attendee');
  }

  return (
    <>
      <div class="form-field">
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <button class="button alt save_order wp-element-button" onClick={ handleResetAttendee } >{ __( 'Reset Attendee', 'lasntgadmin' ) }</button>&nbsp;
        <button class="button alt save_order wp-element-button" onClick={ handleRemoveAttendee } >{ __( 'Remove Attendee', 'lasntgadmin' ) }</button>
        { isLoading && <Spinner/> }
      </div>
    </>
  );
}

export {
  AttendeeFormFieldsetButtons
};
