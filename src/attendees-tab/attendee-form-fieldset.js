
import { AttendeeFormFieldsetFields } from './attendee-form-fieldset-fields';
import { AttendeeFormFieldsetButtons } from './attendee-form-fieldset-buttons';

const AttendeeFormFieldset = props => {

  return (
    <fieldset>

      <legend>Attendee { props.index + 1 }</legend>

      <AttendeeFormFieldsetFields />

      <AttendeeFormFieldsetButtons />

    </fieldset>
  );
};

export {
  AttendeeFormFieldset
};
