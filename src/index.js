
import { render } from '@wordpress/element';

import { OrderForm } from './order-form';
import { Attendees } from './attendees';

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
          orderId={ orderComponent.dataset.orderId }
          productId={ orderComponent.dataset.productId }
          groupId={ JSON.parse(orderComponent.dataset.groupId) }
          userId={ orderComponent.dataset.userId }
          user={ JSON.parse(orderComponent.dataset.user) }
          userMeta={ JSON.parse(orderComponent.dataset.userMeta) }
        />,
        orderComponent
      );
    }

    const attendeesComponent = document.querySelector( '#lasntgadmin-orders-attendees' );
    if( attendeesComponent ) {
      render(
        <Attendees 
          quantity={ attendeesComponent.dataset.quantity }
          nonce={ attendeesComponent.dataset.nonce } 
          fields={ JSON.parse( attendeesComponent.dataset.fields ) }
          order={ JSON.parse(attendeesComponent.dataset.order) }
          groupId={ JSON.parse(attendeesComponent.dataset.groupId) }
          attendees={ JSON.parse(attendeesComponent.dataset.attendees) }
        />,
        attendeesComponent
      );
    }

  },
  false
);

