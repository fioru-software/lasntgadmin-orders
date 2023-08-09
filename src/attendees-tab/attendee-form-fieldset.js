
import { useEffect, createContext, useState } from '@wordpress/element';

import { AttendeeFormFieldsetFields } from './attendee-form-fieldset-fields';
import { AttendeeFormFieldsetButtons } from './attendee-form-fieldset-buttons';
import { AttendeeContext } from './attendee-context';

import { isNil } from 'lodash';

const AttendeeFormFieldset = props => {

  const index = parseInt( props.index );
  const quantity = parseInt( props.quantity );
  const groupId = parseInt( props.groupId );

  const [ attendee, setAttendee ] = useState( props.attendee );

  return (

    <AttendeeContext.Provider value={ attendee }>
      <fieldset>

        <legend>Attendee { index + 1 }</legend>

        <AttendeeFormFieldsetFields groupId={ groupId } quantity={ quantity } index={ index } setAttendee={ setAttendee }/>

        <AttendeeFormFieldsetButtons setAttendee={ setAttendee }/>

      </fieldset>
    </AttendeeContext.Provider>
  );
};

export {
  AttendeeFormFieldset,
  AttendeeContext
};
