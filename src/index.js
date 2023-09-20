
import { createRoot, createElement, render } from '@wordpress/element';

import { OrderForm } from './enrolment-tab/order-form';
import { AttendeeForm } from './attendees-tab/attendee-form';

/**
 * Render components
 */
window.addEventListener(
  'load',
  function (e) {

    const domElement = document.querySelector( '#lasntgadmin-orders-form' );
    if( domElement ) {
      const uiElement = createElement( OrderForm, {
        groupApiPath: domElement.dataset.groupApiPath, 
        orderApiPath: domElement.dataset.orderApiPath,
        productApiPath: domElement.dataset.productApiPath, 
        nonce: domElement.dataset.nonce, 
        title: domElement.dataset.title,
        status: domElement.dataset.status,
        order: JSON.parse(domElement.dataset.order),
        productId: domElement.dataset.productId,
        user: JSON.parse(domElement.dataset.user)
      });
      if ( createRoot ) {
        createRoot( domElement ).render( uiElement );
      } else {
        render( uiElement, domElement );
      }
    }
  },
  false
);

window.addEventListener(
  'load',
  function (e) {

    const domElement = document.querySelector( '#lasntgadmin-orders-attendees-form' );
    if( domElement ) {
      const uiElement = createElement( AttendeeForm, {
        quantity: domElement.dataset.quantity,
        nonce: domElement.dataset.nonce, 
        fields: JSON.parse( domElement.dataset.fields ),
        status: domElement.dataset.status,
        order: JSON.parse(domElement.dataset.order),
        groupId: JSON.parse(domElement.dataset.groupId),
        attendees: JSON.parse(domElement.dataset.attendees),
        product: JSON.parse(domElement.dataset.product)
      });
      if ( createRoot ) {
        createRoot( domElement ).render( uiElement );
      } else {
        render( uiElement, domElement );
      }
    }

  },
  false
);

