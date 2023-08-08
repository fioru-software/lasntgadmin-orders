
import { range, isNull } from "lodash";

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
  return value === "true" ? true : value === "false" ? false : value
}

function extractCoursePrerequisitesMetFieldValues( index, formData ) {
  const existingCoursePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['meta']['course_prerequisites_met']`).map(Number).filter(Number);
  const courePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['acf']['course_prerequisites_met']`).map(Number).filter(Number);
  // use set to ensure array values are unique
  const set = new Set(
    [
      ... existingCoursePrerequisitesMetProductIds,
      ... courePrerequisitesMetProductIds
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

function createAttendeeBatchRequestBody( index, formData, groupId, orderId, productId ) {
  const body = {
    status: formData.has(`attendees[${index}]['status']`) ? formData.get(`attendees[${index}]['status']`) : 'publish',
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
    acf: extractAcfFieldsByAttendeeIndex( index, formData )
  };
  return body;
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
      return accumulator += currentValue === employeeNumber ? 1 : 0;
    }, 0 );
}

export {
  createAttendeeBatchRequestBody,
  extractAcfFieldsByAttendeeIndex,
  extractCoursePrerequisitesMetFieldValues,
  createAttendeeBatchRequest,
  extractAcfFieldValue,
  extractAcfInputName,
  createBatchRequest,
  extractAttendeeIdsFromResponse,
  extractIndexedEmployeeNumbersFromForm,
  extractLastIndexOfDuplicateEmployeeNumberField,
  countOccurrencesOfEmployeeNumber
}
