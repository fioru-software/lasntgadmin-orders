
function findProductById( productId, products ) {
  return products.find( product => product.id === parseInt(productId) );
}

function findGroupQuotas( metaData ) {
  return metaData.filter( item => {
    return /_quotas_field_[\d]+/.test(item.key);
  } );
}

function findGroupQuota( groupId, quotas ) {
  const group = quotas.find( quota => {
    return quota.key === `_quotas_field_${groupId}`;
  });
  return group === undefined ? 0 : group.value;
}

function calculateAvailableSpaces( stockQuantity, groupQuota ) {
  stockQuantity = parseInt(stockQuantity);
  groupQuota = parseInt(groupQuota);
  if( isNaN( stockQuantity ) ) {
    return 0;
  }
  if( isNaN( groupQuota ) ) {
    return stockQuantity;
  }
  if( groupQuota === 0 ) {
    return groupQuota;
  }
  if( groupQuota > stockQuantity ) {
    return stockQuantity;
  }
  if( groupQuota <= stockQuantity ) {
    return groupQuota;
  }
  return groupQuota;
}

export {
  findProductById,
  findGroupQuotas,
  findGroupQuota,
  calculateAvailableSpaces
};
