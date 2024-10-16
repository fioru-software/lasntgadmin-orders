
import { useContext } from '@wordpress/element';
import { ProductContext, OrderContext, AttendeeContext } from './attendee-context';

const HiddenFields = props => {

  const product = useContext( ProductContext );
  const order = useContext( OrderContext );
  const attendee = useContext( AttendeeContext );

  const index = parseInt( props.index );
  const groupId = parseInt( props.groupId );

  function attendeeMetaExists( key, attendee ) {
    return attendee && 'meta' in attendee && key in attendee.meta;
  }

  return (
    <>
      { attendee?.enrolment_log && <input type="hidden" name={ `attendees[${index}]['enrolment_log']['post_id']` } value={ attendee.enrolment_log.post_id } /> }

      { ( attendee?.ID || attendee?.id ) && <input type="hidden" name={ `attendees[${index}]['id']` } value={ attendee?.ID || attendee?.id } /> }

      { ( attendee?.post_status || attendee?.status ) && <input type="hidden" name={ `attendees[${index}]['status']` } value={ attendee?.post_status || attendee?.status } /> }

      { attendeeMetaExists( 'order_ids', attendee ) && attendee?.meta['order_ids'].map( orderId => <input key={ orderId } type="hidden" name={ `attendees[${index}]['meta']['order_ids']` } value={ orderId } /> ) }

      { attendeeMetaExists( 'product_ids', attendee ) && attendee?.meta['product_ids'].map( productId => <input key={ productId } type="hidden" name={ `attendees[${index}]['meta']['product_ids']` } value={ productId } /> ) }

      { attendeeMetaExists( 'groups-read', attendee ) && attendee?.meta['groups-read'].map( groupId => <input key={ groupId } type="hidden" name={ `attendees[${index}]['meta']['groups-read']` } value={ groupId } /> ) }

      { attendee?.acf?.course_prerequisites_met && attendee?.acf?.course_prerequisites_met.map( productId => <input key={ productId } type="hidden" name={ `attendees[${index}]['meta']['course_prerequisites_met']` } value={ productId } /> ) }

    </>
  );

};

export {
  HiddenFields
};
