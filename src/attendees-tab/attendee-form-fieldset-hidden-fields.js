
import { useContext } from '@wordpress/element';
import { ProductContext, OrderContext, AttendeeContext } from './attendee-context';

const HiddenFields = props => {

  const product = useContext( ProductContext );
  const order = useContext( OrderContext );
  const attendee = useContext( AttendeeContext );

  const index = parseInt( props.index );
  const groupId = parseInt( props.groupId );

  return (
    <>
      { ( attendee?.ID || attendee?.id ) && <input type="hidden" name={ `attendees[${index}]['id']` } value={ attendee?.ID || attendee?.id } /> }
      { ( attendee?.post_status || attendee?.status ) && <input type="hidden" name={ `attendees[${index}]['status']` } value={ attendee?.post_status || attendee?.status } /> }

      { attendee?.meta?.order_ids && attendee?.meta?.order_ids.map( orderId => <input type="hidden" name={ `attendees[${index}]['meta']['order_ids']` } value={ order.id } /> ) }

      { attendee?.meta?.product_ids && attendee?.meta?.product_ids.map( productId => <input type="hidden" name={ `attendees[${index}]['meta']['product_ids']` } value={ product.id } /> ) }

      { attendee?.meta['groups-read'] && attendee?.meta['groups-read'].map( groupId => <input type="hidden" name={ `attendees[${index}]['meta']['groups-read']` } value={ groupId } /> ) }

      { attendee?.acf?.course_prerequisites_met && attendee?.acf?.course_prerequisites_met.map( productId => <input type="hidden" name={ `attendees[${index}]['meta']['course_prerequisites_met']` } value={ product.id } /> ) }

    </>
  );

};

export {
  HiddenFields
};
