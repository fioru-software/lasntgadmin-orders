
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
  return order.status === 'waiting-list';
}

function hasAttendees( order ) {
  return Array.isArray(order.attendees) && order.attendees > 0;
}

export {
  getLineItemByProductId,
  findOrderMetaByKey,
  isExistingOrder,
  isWaitingOrder,
  hasAttendees
};
