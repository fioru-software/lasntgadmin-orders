
function getPublishedEnrolmentStatus() {
  return 'publish';
}

function getCanceledEnrolmentStatus() {
  return 'cancelled';
}

function getRemovedEnrolmentStatus() {
  return 'closed';
}

function getPendingEnrolmentStatus() {
  return 'pending';
}

/**
 * apiFetch HTTP requests have a data property
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
 */
function getUpdateEnrolmentLogRequest( nonce, data ) {
  return {
    path: `/lasntgadmin/enrolment/log/v1/update-entry`,
    method: 'PUT',
    headers: {
      'X-WP-Nonce': nonce
    },
    data
  };
}

function createEnrolmentLogBatchRequestBody( attendeeId, productId, orderId, groupId, status, comment='' ) {
  const body = {
    product_id: productId,
    attendee_id: attendeeId,
    order_id: orderId,
    group_id: groupId,
    status: status,
    comment: comment
  };
  return body;
}

function createEnrolmentLogBatchRequest( nonce, body ) {
  return {
    path: '/lasntgadmin/enrolment/log/v1/add-entry',
    method: 'POST',
    headers: {
      'X-WP-Nonce': nonce
    },
    body
  };
}

export {
  getUpdateEnrolmentLogRequest,
  getPublishedEnrolmentStatus,
  getPendingEnrolmentStatus,
  getRemovedEnrolmentStatus,
  getCanceledEnrolmentStatus,
  createEnrolmentLogBatchRequestBody,
  createEnrolmentLogBatchRequest
};
