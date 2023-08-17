
import { isNumber } from "lodash";

/**
 * @return { Array }
 */
function filterAttendeeIdFromOrderMeta( attendeeId, orderMeta ) {
  const attendeeIds = findOrderMetaByKey( 'attendee_ids', orderMeta);
  if( attendeeIds !== undefined ) {
    const attendeeIdsOrderMeta = filterOrderMetaByKey( 'attendee_ids', orderMeta );
    return [
      ... new Set(
        attendeeIdsOrderMeta.map( meta => meta.value ).map(Number).filter( id => parseInt(id) !== parseInt( attendeeId ) )
      )
    ];
  }
  return [];
}

/**
 * @return { Boolean }
 */
function isAttendeeIdInOrderMeta( attendeeId, orderMeta ) {
  const attendeeIds = findOrderMetaByKey( 'attendee_ids', orderMeta);
  if( attendeeIds !== undefined ) {
    const attendeeIdsOrderMeta = filterOrderMetaByKey( 'attendee_ids', orderMeta );
    return attendeeIdsOrderMeta.map( meta => meta.value ).map(Number).includes( parseInt(attendeeId) );
  }
  return false;
}

function isPurchaseOrderPaid( paymentMethod ) {
  return paymentMethod === 'woocommerce_gateway_purchase_order';
}

function isGrantPaid( paymentMethod ) {
  return paymentMethod === 'lasntgadmin_grant_funded_payment_gateway';
}

function isPaidStatus( status ) {
  return ['on-hold', 'completed'].includes( status );
}

/**
 * @return {Object|Undefined}
 */
function findOrderMetaByKey( key, orderMeta ) {
  return orderMeta.find( item => item.key === key );
}

/**
 * @return {Array}
 */
function filterOrderMetaByKey( key, orderMeta ) {
  if( findOrderMetaByKey( key, orderMeta ) !== undefined ) {
    return orderMeta.filter( meta => meta.key === key );
  }
  return [];
}

function getLineItemByProductId( productId, order ) {
  return order.line_items.find( item => item.product_id === productId );
}

function isExistingOrder( order ) {
  return order.line_items.find( item => isNumber(item?.product_id) );
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

/**
 * @see OrderUtils::ensure_unique_enrolment called via rest_pre_insert_shop_order filter.
 */
function getRemoveAttendeeFromShopOrderRequest( orderId, attendeeId, nonce, data ) {
  let request = getUpdateShopOrderRequest( orderId, nonce, data );
  request.path += `?attendee_id=${ attendeeId }`
  return request;
}

/**
 * apiFetch HTTP requests have a data property
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
 */
function getUpdateShopOrderRequest( orderId, nonce, data ) {
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

/**
 * apiFetch HTTP requests have a data property
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
 */
function getUpdateOrderRequest( orderId, nonce, data) {
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
  filterAttendeeIdFromOrderMeta,
  getRemoveAttendeeFromShopOrderRequest,
  getUpdateShopOrderRequest,
  getUpdateOrderRequest,
  getLineItemByProductId,
  getPendingStatus,
  getWaitingStatus,
  getDraftStatus,
  getAttendeesStatus,
  findOrderMetaByKey,
  filterOrderMetaByKey,
  isExistingOrder,
  isWaitingOrder,
  isWaitingStatus, 
  isPendingStatus,
  isDraftOrder,
  isPaidStatus,
  isGrantPaid,
  isPurchaseOrderPaid,
  isAttendeeIdInOrderMeta,
  isPaidOrder,
  isDraftStatus,
  hasAttendees
};
