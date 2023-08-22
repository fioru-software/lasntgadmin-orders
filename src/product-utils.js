
function isGrantFunded( product ) {
  if( 'meta_data' in product ) {
    const grantYear = findFirstProductMetaByKey( 'grant_year', product.meta_data );
    if( undefined !== grantYear ) {
      return true;
    }
  }
  return false;
}

function isWaterGrantFunded( product ) {
  if( 'meta_data' in product ) {
    if( isGrantFunded( product ) ) {
      const fundingSources = findFirstProductMetaByKey( 'funding_sources', product.meta_data );
      if( undefined !== fundingSources && fundingSources.value.includes('water-grant')) {
        return true;
      }
    }
  }
  return false;
}

function findFirstProductMetaByKey( key, productMeta ) {
  return productMeta.find( item => item.key === key );
}

function isCourseClosed( status ) {
  return isClosedStatus(status) || isCancelledStatus( status ) || isArchivedStatus(status);
}

function isDraftStatus( status ) {
  return status === 'draft';
}

function isOpenForEnrolmentStatus( status ) {
  return status === 'open_for_enrollment';
}

function isClosedStatus( status ) {
  return status === 'closed';
}

function isCancelledStatus( status ) {
  return status === 'cancelled';
}

function isTemplateStatus( status ) {
  return status === 'template';
}

function isEnrolmentClosedStatus( status ) {
  return status === 'enrollment_closed';
}

function isDatePassedStatus( status ) {
  return status === 'date_passed';
}

function isArchivedStatus( status ) {
  return status === 'archived';
}

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
  return group === undefined ? '' : group.value;
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
  calculateAvailableSpaces,
  isCourseClosed,
  isGrantFunded,
  isWaterGrantFunded,
  findFirstProductMetaByKey
};
