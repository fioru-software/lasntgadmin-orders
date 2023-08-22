
import { render } from '@wordpress/element';

import { OrderForm } from './enrolment-tab/order-form';
import { AttendeeForm } from './attendees-tab/attendee-form';

/**
 * Render components
 */
window.addEventListener(
  'load',
  function (e) {

    const orderComponent = document.querySelector( '#lasntgadmin-orders-form' );
    if( orderComponent ) {
      render(
        <OrderForm
          groupApiPath={ orderComponent.dataset.groupApiPath } 
          orderApiPath={ orderComponent.dataset.orderApiPath }
          productApiPath={ orderComponent.dataset.productApiPath } 
          nonce={ orderComponent.dataset.nonce } 
          title={ orderComponent.dataset.title }
          status={ orderComponent.dataset.status }
          order={ JSON.parse(orderComponent.dataset.order) }
          productId={ orderComponent.dataset.productId }
          user={ JSON.parse(orderComponent.dataset.user) }
        />,
        orderComponent
      );
    }

    const attendeesComponent = document.querySelector( '#lasntgadmin-orders-attendees-form' );
    if( attendeesComponent ) {
      render(
        <AttendeeForm
          quantity={ attendeesComponent.dataset.quantity }
          nonce={ attendeesComponent.dataset.nonce } 
          fields={ JSON.parse( attendeesComponent.dataset.fields ) }
          status={ attendeesComponent.dataset.status }
          order={ JSON.parse(attendeesComponent.dataset.order) }
          groupId={ JSON.parse(attendeesComponent.dataset.groupId) }
          attendees={ JSON.parse(attendeesComponent.dataset.attendees) }
          product={ JSON.parse(attendeesComponent.dataset.product) }
        />,
        attendeesComponent
      );
    }

  },
  false
);

