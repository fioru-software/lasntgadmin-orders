
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

function filterItemFromOrderMeta( key, value, orderMeta ) {
  return orderMeta.filter( item => {
    if( item.key != key ) {
      return true;
    } else if( item.value != value ) {
      return true;
    } else {
      return false;
    }
  });
}

/**
 * @return { Boolean }
 */
function isAttendeeIdInOrderMeta( attendeeId, orderMeta ) {
  return isItemInOrderMeta( 'attendee_ids', attendeeId, orderMeta );
}

/**
 * @return { Boolean }
 */
function isItemInOrderMeta( key, value, orderMeta ) {
  const items = findOrderMetaByKey( key, orderMeta);
  if( items !== undefined ) {
    const filteredItems = filterOrderMetaByKey( key, orderMeta );
    return filteredItems.map( meta => meta.value ).map(Number).includes( parseInt(value) );
  }
  return false;
}

function isPurchaseOrderPaid( paymentMethod ) {
  return paymentMethod === 'woocommerce_gateway_purchase_order';
}

function isGrantPaid( paymentMethod ) {
  return paymentMethod === 'lasntgadmin_grant_funded_payment_gateway';
}

function isCompletedStatus( status ) {
  return ['completed'].includes( status );
}

function isCompletedOrder( order ) {
  return isCompletedStatus( order.status );
}

function isCancelledOrder( order ) {
  return isCancelledStatus( order.status );
}

function isCancelledStatus( status ) {
  return status === 'cancelled';
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


function isWaitingOrder( order ) {
  return isWaitingStatus( order.status );
}

function isWaitingStatus( status ) {
  return status === getWaitingStatus();
}

function getWaitingStatus() {
  return 'waiting-list';
}

function isPendingPaymentStatus( status ) {
  return status === getPendingPaymentStatus();
}

function getPendingPaymentStatus() {
  return 'pending';
}

function getPrefixedPendingPaymentStatus() {
  return 'wc-' + getPendingPaymentStatus();
}

function getPrefixedOrderStatus( status ) {
  return 'wc-' + status;
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

function isPendingAttendeesStatus( status ) {
  return status === getPendingAttendeesStatus();
}

function getPendingAttendeesStatus() {
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
  getPendingPaymentStatus,
  getWaitingStatus,
  getDraftStatus,
  getPendingAttendeesStatus,
  getPrefixedPendingPaymentStatus,
  getPrefixedOrderStatus,
  findOrderMetaByKey,
  filterOrderMetaByKey,
  filterItemFromOrderMeta,
  isPendingAttendeesStatus,
  isExistingOrder,
  isWaitingOrder,
  isWaitingStatus, 
  isPendingPaymentStatus,
  isDraftOrder,
  isCompletedStatus,
  isCancelledStatus,
  isGrantPaid,
  isPurchaseOrderPaid,
  isAttendeeIdInOrderMeta,
  isItemInOrderMeta,
  isCompletedOrder,
  isCancelledOrder,
  isDraftStatus
};
