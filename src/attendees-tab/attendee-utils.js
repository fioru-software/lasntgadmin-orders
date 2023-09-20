
import { isUndefined, range, isNull, isString } from "lodash";

function isExistingAttendee( attendee ) {
  return isAttendeeLoadedViaProps( attendee ) || isAttendeeLoadedViaSearch( attendee );
}

/**
 * Existing attendee's are passed in via props on page load.
 *
 */
function isAttendeeLoadedViaProps( attendee ) {
  if( ! isNull( attendee ) ) {
    return 'ID' in attendee;
  }
  return false;
}

/**
 * Existing attendee's can be loaded via search.
 */
function isAttendeeLoadedViaSearch( attendee ) {
  if( ! isNull( attendee ) ) {
    return 'id' in attendee;
  }
  return false;
}

/**
 * @return { String }
 */
function getAttendeeAcfValueByField( field, attendee ) {
  if( attendee && 'acf' in attendee && 'name' in field && field.name in attendee.acf ) {
    return attendee.acf[field.name];
  } 
  if( 'default_value' in field && isString( field.default_value ) ) {
    return field.default_value
  }
  return "";
}


/**
 * @return { Boolean }
 */
function isOrderIdInAttendeeMeta( orderId, attendeeMeta ) {
  if( 'order_ids' in attendeeMeta && Array.isArray( attendeeMeta.order_ids ) ) {
    const orderIds = attendeeMeta.order_ids.map(Number);
    return orderIds.includes( parseInt( orderId ) );
  }
  return false;
}

/**
 * @return { Array }
 */
function filterOrderIdFromAttendeeMeta( orderId, attendeeMeta) {
  if( 'order_ids' in attendeeMeta && Array.isArray( attendeeMeta.order_ids ) ) {
    return [ 
      ... new Set(
        attendeeMeta.order_ids.map(Number).filter( id => id !== parseInt( orderId ) )
      ) 
    ];
  }
  return [];
}

/**
 * @return { Boolean }
 */
function isProductIdInAttendeeMeta( productId, attendeeMeta ) {
  if( 'product_ids' in attendeeMeta && Array.isArray( attendeeMeta.product_ids ) ) {
    const productIds = attendeeMeta.product_ids.map(Number);
    return productIds.includes( parseInt( productId ) );
  }
  return false;
}

/**
 * @return {Array}
 */
function filterProductIdFromAttendeeMeta( productId, attendeeMeta) {
  if( 'product_ids' in attendeeMeta && Array.isArray( attendeeMeta.product_ids ) ) {
    return [ 
      ... new Set(
        attendeeMeta.product_ids.map(Number).filter( id => id !== parseInt( productId ) )
      ) 
    ];
  }
  return [];
}

function addIdToValidAttendees( attendeeReqBodies, validAttendees ) {
  return attendeeReqBodies.map( body => { 
    // if valid attendee (means attendee was created) then add id, so we can rerender attendees
    const attendee = validAttendees.find( ( validAttendee, index ) => validAttendee.acf.employee_number === body.acf.employee_number );
    if( !isUndefined( attendee ) ) {
      body = Object.assign( {}, attendee, body );
    }
    return body;
  });
}

/**
 * Example of longName is attendees[0]['acf']['first_name']
 * Example of shortName is first_name
 *
 * @param { number } index Attendee index for HTML inputs
 * @param { FormData } formData
 * @return array
 */
function extractAcfFieldsByAttendeeIndex( index, formData ) {

  let fields = {};
  for (const longName of formData.keys()) {
    const shortName = extractAcfInputName( longName );
    if( ! isNull( shortName ) ) {
      switch(shortName) {
        case 'course_prerequisites_met':
          fields[shortName] = extractCoursePrerequisitesMetFieldValues( index, formData );
          break;
        default:
          fields[shortName] = extractAcfFieldValue( index, shortName, formData );
      }
    }
  }
  return fields;

}

/**
 * @param { string } name ACF input field's name attribute
 */
function extractAcfInputName( name ) {
  const match = name.match(/attendees\[\d+\]\['acf'\]\['(.+)'\]/)
  return match ? match[1] : null;
}


/**
 * Checkboxes require boolean
 */
function extractAcfFieldValue( index, name, formData ) {
  const value = formData.get(`attendees[${index}]['acf']['${name}']`);
  return value === "on" ? true : value === null ? false : value
} 

function extractCoursePrerequisitesMetFieldValues( index, formData ) {
  const existingCoursePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['meta']['course_prerequisites_met']`).map(Number).filter(Number);
  const coursePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['acf']['course_prerequisites_met']`).map(Number).filter(Number);
  // use set to ensure array values are unique
  const set = new Set(
    [
      ... existingCoursePrerequisitesMetProductIds,
      ... coursePrerequisitesMetProductIds
    ]
  );
  return [ ... set ];
}

/**
 * @param { number } quantity Number of attendees
 * @param { HTMLElement } form
 * @param { number } groupId
 * @param { number } orderId
 * @return object
 */
function createBatchRequest( nonce, formData, quantity, groupId, orderId ) {
  return range(quantity).map( index => {
    return createAttendeesRequest( nonce, formData, index, groupId, orderId );
  });
}

/**
 * apiFetch HTTP requests have a data property
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
 */
function getUpdateAttendeeRequest( orderId, attendeeId, nonce, body ) {
  return {
    path: `/wp/v2/attendee/${attendeeId}?order_id=${orderId}`,
    method: 'PUT',
    headers: {
      'X-WP-Nonce': nonce
    },
    data: Object.assign(
      {
        id: attendeeId,
      }, 
      body
    )
  };
}

/**
 * Batch HTTP requests have a body property
 *
 * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
 */
function getUpdateAttendeeBatchRequest( orderId, attendeeId, nonce, body ) {
  return {
    path: `/wp/v2/attendee/${attendeeId}?order_id=${orderId}`,
    method: 'PUT',
    headers: {
      'X-WP-Nonce': nonce
    },
    body: Object.assign(
      {
        id: attendeeId,
      }, 
      body
    )
  };
}

function getCreateAttendeeBatchRequest( orderId, nonce, body ) {
  return {
    path: `/wp/v2/attendee?order_id=${orderId}`,
    method: 'POST',
    headers: {
      'X-WP-Nonce': nonce
    },
    body
  };
}

function createAttendeeAcfFieldsBatchRequestBody( index, formData ) {
  const body = {
    status: formData.has(`attendees[${index}]['status']`) ? formData.get(`attendees[${index}]['status']`) : 'publish',
    acf: extractAcfFieldsByAttendeeIndex( index, formData )
  };
  return body;
}

function createAttendeeMetaFieldsBatchRequestBody( index, formData, groupId, orderId, productId ) {
  const body = {
    meta: {
      'groups-read': [
        ... new Set(
          formData.getAll(`attendees[${index}]['meta']['groups-read']`).map(Number).filter(Number).concat( groupId )
        )
      ],
      order_ids: [
        ... new Set(
          formData.getAll(`attendees[${index}]['meta']['order_ids']`).map(Number).filter(Number).concat( orderId )
        )
      ],
      product_ids: [
        ... new Set(
          formData.getAll(`attendees[${index}]['meta']['product_ids']`).map(Number).filter(Number).concat( productId )
        )
      ]
    },
  };
  return body;
}

/**
 * Combination of acf and meta fields
 */
function createAttendeeBatchRequestBody( acfFields, metaFields ) {
  return Object.assign({}, acfFields, metaFields );
}

function createAttendeeBatchRequest( nonce, index, formData, body, orderId ) {

  let req = {};
  const attendeeId = formData.has(`attendees[${index}]['id']`) ? parseInt(formData.get(`attendees[${index}]['id']`)) : null;

  if( formData.has(`attendees[${index}]['id']`) ) {
    const attendeeId = parseInt( formData.get( `attendees[${index}]['id']` ) );
    req = getUpdateAttendeeBatchRequest( orderId, attendeeId, nonce, body );
  } else {
    req = getCreateAttendeeBatchRequest( orderId, nonce, body );
  }

  return req;
}

function extractValidAttendeesFromResponse( attendeeResponses ) {
  const validResponses = attendeeResponses.map( res => { 
    if( ('body' in res) && !('data' in res.body) ) {
      return res.body;
    }
  }).filter(Boolean);
  return validResponses;
}

function extractInvalidAttendeesFromResponse( attendeeResponses ) {
  const invalidResponses = attendeeResponses.map( res => { 
    if( ('body' in res) && ('data' in res.body) ) {
      return res.body.data;
    }
  }).filter(Boolean);
  return invalidResponses;
}

function extractAttendeeIdsFromResponse( attendeeResponses ) {
  return attendeeResponses.map( res => Object.hasOwn(res.body, 'id' ) ? parseInt( res.body.id ) : null ).filter(Boolean);
}

/**
 * Extracts indexed employee numbers from FormData object.
 * Indexes are preserved.
 *
 * @param {Number} quantity
 * @param {FormData} formData
 * @return {Object} Object with original attendee indexes as props.
 */
function extractIndexedEmployeeNumbersFromForm( quantity, formData ) {
  let indexedEmployeeNumbers = {};
  for( let index=0; index<quantity; index++) {
    if( formData.has(`attendees[${index}]['acf']['employee_number']`) ) {
      const employeeNumber = formData.get(`attendees[${index}]['acf']['employee_number']`);
      if( employeeNumber ) {
        indexedEmployeeNumbers[index] = employeeNumber;
      }
    }
  }
  return indexedEmployeeNumbers;
}

/**
 * @param {Object} employeeNumbers An object with attendee indexes as props
 * @return {Number|false} Index of the employee or false
 */
function extractLastIndexOfDuplicateEmployeeNumberField( employeeNumbers ) {
  for (const [index, employeeNumber] of (Object.entries(employeeNumbers)).reverse() ) {
    const count = countOccurrencesOfEmployeeNumber( 
      employeeNumber, 
      Object.values( employeeNumbers ) 
    );
    if( count > 1 ) {
      return parseInt(index);
    }
  }
  return false;
}

/**
 * @param {String} employeeNumber
 * @param {String[]} employeeNumbers
 * @return {Number} Number of occurrences 
 */
function countOccurrencesOfEmployeeNumber( employeeNumber, employeeNumbers ) {
  return employeeNumbers.reduce(
    ( accumulator, currentValue, currentIndex  ) => {
      return accumulator += currentValue.trim().toUpperCase() === employeeNumber.trim().toUpperCase() ? 1 : 0;
    }, 0 );
}

export {
  getAttendeeAcfValueByField,
  filterOrderIdFromAttendeeMeta,
  isProductIdInAttendeeMeta,
  filterProductIdFromAttendeeMeta,
  isOrderIdInAttendeeMeta,
  getUpdateAttendeeBatchRequest,
  getUpdateAttendeeRequest,
  createAttendeeBatchRequestBody,
  createAttendeeAcfFieldsBatchRequestBody,
  createAttendeeMetaFieldsBatchRequestBody,
  extractAcfFieldsByAttendeeIndex,
  extractCoursePrerequisitesMetFieldValues,
  createAttendeeBatchRequest,
  extractAcfFieldValue,
  extractAcfInputName,
  createBatchRequest,
  extractAttendeeIdsFromResponse,
  extractValidAttendeesFromResponse,
  extractInvalidAttendeesFromResponse,
  extractIndexedEmployeeNumbersFromForm,
  extractLastIndexOfDuplicateEmployeeNumberField,
  countOccurrencesOfEmployeeNumber,
  addIdToValidAttendees,
  isExistingAttendee,
  isAttendeeLoadedViaProps,
  isAttendeeLoadedViaSearch
}
