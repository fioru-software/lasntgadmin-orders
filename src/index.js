
import { createRoot, createElement, render } from '@wordpress/element';

import { OrderForm } from './enrolment-tab/order-form';
import { AttendeeForm } from './attendees-tab/attendee-form';

window.shouldBeforeUnloadEventFire = true;
window.fetchInProgress = false;

/**
 * Prevent navigating away from order while fetch in progress.
 */
window.addEventListener(
  'click', 
  function( e ) {
    window.shouldBeforeUnloadEventFire = true;
    if( window.fetchInProgress ) {
      e.preventDefault();
      alert("Please wait until the process has completed.");
    }
  }
);

/**
 * Warn when navigating away from an order when no fetch in progress.
 * Okay to navigate within order tabs.
 */
window.addEventListener(
  'beforeunload',
  function(event) {
    if( window.shouldBeforeUnloadEventFire === true && window.fetchInProgress === false ) {
      window.shouldBeforeUnloadEventFire = false;
      const href = document.activeElement.href;
      if( href ) {
        let result = /\/wp-admin\/post\.php\?post=\d+&action=edit&tab=\w+/.test(href);
        if( ! result ) {
          event.preventDefault();
          event.returnValue = true;
        }
      }
    }
  }
);

/**
 * Render components
 */
window.addEventListener(
  'load',
  function(e) {

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
        user: JSON.parse(domElement.dataset.user),
        reservedStock: domElement.dataset.reservedStock,
        currency: domElement.dataset.currency
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
  function(e) {

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

