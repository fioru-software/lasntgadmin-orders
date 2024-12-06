
function wpBatchReq( reqs ) {
  return {
    path: `/batch/v1`,
    method: 'POST',
    data: {
      requests: reqs
    }
  };
}

export {
  wpBatchReq
}
