
import { render } from '@wordpress/element';

import { OrderForm } from './order-form';

/**
 * Render components
 */
window.addEventListener(
  'load',
  function (e) {

    const orderComponent = document.querySelector( '#lasntgadmin-orders-component' );
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
        groupId={ JSON.parse(orderComponent.dataset.groupId) }
        userId={ orderComponent.dataset.userId }
        user={ JSON.parse(orderComponent.dataset.user) }
        userMeta={ JSON.parse(orderComponent.dataset.userMeta) }
      />,
      orderComponent
    );

  },
  false
);

