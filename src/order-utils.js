
import { isNumber } from "lodash";

function findOrderMetaByKey( key, orderMeta ) {
  return orderMeta.find( item => item.key === key );
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

export {
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
  isDraftStatus,
  hasAttendees
};
