
import { isNumber } from "lodash";

function isPurchaseOrderPaid( paymentMethod ) {
  return paymentMethod === 'woocommerce_gateway_purchase_order';
}

function isGrantPaid( paymentMethod ) {
  return paymentMethod === 'lasntgadmin_grant_funded_payment_gateway';
}

function isPaidStatus( status ) {
  return ['on-hold', 'completed'].includes( status );
}

function findOrderMetaByKey( key, orderMeta ) {
  return orderMeta.find( item => item.key === key );
}

function getLineItemByProductId( productId, order ) {
  return order.line_items.find( item => item.product_id === productId );
}

function isExistingOrder( order ) {
  return order.line_items.find( item => isNumber(item?.product_id) );
}

/**
 * @todo clarify
 */
function isOrderAttendee( order, attendee ) {
  //{ ! props.order.meta_data.filter( meta => meta.key === 'attendee_ids' ).map( meta => meta.value).map(Number).includes( attendee?.ID ) && 
  return order.meta_data.filter( meta => meta.key === 'attendee_ids' ).map( meta => meta.value).map(Number).includes( attendee.ID );
}

function isPaidOrder( order ) {
  return isPaidStatus( order.status );
}

function isWaitingOrder( order ) {
  return isWaitingStatus( order.status );
}

function isWaitingStatus( status ) {
  return status === getWaitingStatus();
}

function getWaitingStatus() {
  return 'waiting-list';
}

function isPendingStatus( status ) {
  return status === getPendingStatus();
}

function getPendingStatus() {
  return 'pending';
}

function isDraftOrder( order ) {
  return isDraftStatus( order.status );
}

function isDraftStatus( status ) {
  return status === getDraftStatus();
}

function getDraftStatus() {
  return 'auto-draft';
}

function hasAttendees( order ) {
  return Array.isArray(order.attendees) && order.attendees > 0;
}

function getAttendeesStatus() {
  return 'attendees';
}

function getUpdateShopOrderRequestBody( orderId, nonce, data ) {
  return  {
    path: `/wp/v2/shop_order/${orderId}`,
    method: 'PUT',
    headers: {
      "X-WP-Nonce": nonce
    },
    data: Object.assign( 
      {
        id: orderId,
      },
      data
    )
  };
}

function getUpdateOrderRequestBody( orderId, nonce, data) {
  return  {
    path: `/wc/v3/orders/${ orderId }`,
    method: 'PUT',
    headers: {
      "X-WP-Nonce": nonce
    },
    data
  };
}

export {
  getUpdateShopOrderRequestBody,
  getUpdateOrderRequestBody,
  getLineItemByProductId,
  getPendingStatus,
  getWaitingStatus,
  getDraftStatus,
  getAttendeesStatus,
  findOrderMetaByKey,
  isExistingOrder,
  isWaitingOrder,
  isWaitingStatus, 
  isPendingStatus,
  isDraftOrder,
  isPaidStatus,
  isGrantPaid,
  isPurchaseOrderPaid,
  isOrderAttendee,
  isPaidOrder,
  isDraftStatus,
  hasAttendees
};
