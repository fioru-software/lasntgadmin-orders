
import { createContext, useState } from '@wordpress/element';

import { AttendeeFormFieldsetFields } from './attendee-form-fieldset-fields';
import { AttendeeFormFieldsetButtons } from './attendee-form-fieldset-buttons';

import { isNil } from 'lodash';

const AttendeeContext = createContext();

const AttendeeFormFieldset = props => {

  const index = props.index;

  const [ attendee, setAttendee ] = useState( props.attendee );

  return (

    <AttendeeContext.Provider value={ attendee }>
      <fieldset>

        <legend>Attendee { index + 1 }</legend>

        <AttendeeFormFieldsetFields index={ index } setAttendee={ setAttendee }/>

        <AttendeeFormFieldsetButtons setAttendee={ setAttendee }/>

      </fieldset>
    </AttendeeContext.Provider>
  );
};

export {
  AttendeeFormFieldset,
  AttendeeContext
};
