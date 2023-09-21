
import { useEffect, useState, useContext } from '@wordpress/element';

import { AttendeeFormFieldset } from './attendee-form-fieldset';

import { isNil, range } from 'lodash';

import { AttendeesContext } from './attendee-context';

const AttendeeFormFieldsets = props => {

  const quantity = parseInt( props.quantity );
  const nonce = props.nonce;
  const groupId = parseInt( props.groupId );

  const attendees = useContext( AttendeesContext ); // All attendees

  return (
    attendees.map( ( attendee, index ) => <AttendeeFormFieldset key={ index } groupId={ groupId } quantity={ quantity } index={ index } nonce={ nonce } attendee={ attendee } setAttendees={ props.setAttendees } setFormNotice={ props.setFormNotice } setOrderQuantity={ props.setOrderQuantity } /> )
  );

};

export {
  AttendeeFormFieldsets
};
