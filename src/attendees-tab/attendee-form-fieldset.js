
import { createContext, useState } from '@wordpress/element';

import { AttendeeFormFieldsetFields } from './attendee-form-fieldset-fields';
import { AttendeeFormFieldsetButtons } from './attendee-form-fieldset-buttons';
import { AttendeeContext } from './attendee-context';

import { isNil } from 'lodash';

const AttendeeFormFieldset = props => {

  const index = props.index;
  const quantity = props.quantity;

  const [ attendee, setAttendee ] = useState( props.attendee );

  return (

    <AttendeeContext.Provider value={ attendee }>
      <fieldset>

        <legend>Attendee { index + 1 }</legend>

        <AttendeeFormFieldsetFields quantity={ quantity } index={ index } setAttendee={ setAttendee }/>

        <AttendeeFormFieldsetButtons setAttendee={ setAttendee }/>

      </fieldset>
    </AttendeeContext.Provider>
  );
};

export {
  AttendeeFormFieldset,
  AttendeeContext
};
