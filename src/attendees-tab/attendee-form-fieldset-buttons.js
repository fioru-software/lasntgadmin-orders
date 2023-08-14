
import { useContext, useState, useEffect } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ProductContext, OrderContext, AttendeeContext } from './attendee-context';
import { isCourseClosed } from '../product-utils';
import { isPaidStatus, isGrantPaid, isPurchaseOrderPaid } from '../order-utils';
import { isNil } from 'lodash';

/**
 * Decides which actions are available per attendee.
 * Product statuses open_for_enrollment
 */
const AttendeeFormFieldsetButtons = props => {

  const product = useContext( ProductContext );
  const attendee = useContext( AttendeeContext );
  const order = useContext( OrderContext );

  const [ isLoading, setIsLoading ] = useState(false);
  const [ notice, setNotice ] = useState(null);

  /**
   * Reset button is disabled when the course has a status considered to be closed
   */
  function isResetButtonDisabled() {
    return isCourseClosed( product.status ) || isNil( attendee );
  }

  /**
   * Remove button is disabled 
   * when the course has a status considered to be closed 
   * or payment method is not grant and purchase order
   */
  function isRemoveButtonDisabled() {
    return isCourseClosed( product.status ) || ( order.payment_method !== "" && ! isGrantPaid( order.payment_method ) && ! isPurchaseOrderPaid( order.payment_method ) );
  }

  function handleResetAttendee( e ) {
    e.preventDefault();
    props.setAttendee(null);
  }

  function handleRemoveAttendee( e ) {
    e.preventDefault();
    console.log('TODO: remove attendee');
  }

  return (
    <>
      <div class="form-field">
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <button class="button alt save_order wp-element-button" onClick={ handleResetAttendee } disabled={ isResetButtonDisabled() } >{ __( 'Reset Attendee', 'lasntgadmin' ) }</button>&nbsp;
        <button class="button alt save_order wp-element-button" onClick={ handleRemoveAttendee } disabled={ isRemoveButtonDisabled() } >{ __( 'Remove Attendee', 'lasntgadmin' ) }</button>
        { isLoading && <Spinner/> }
      </div>
    </>
  );
}

export {
  AttendeeFormFieldsetButtons
};
