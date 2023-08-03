
import { range, isNull } from "lodash";

function assembleAcfFieldsForRequestBody( index, formElement, formData ) {
  return Object.assign(
    Object.fromEntries(
      extractAttendeeByIndex( index, formElement, formData )
    )
  );
}

/**
 * @param { number } index Attendee index for HTML inputs
 * @param { HTMLElement } form
 * @return array
 */
function extractAttendeeByIndex( index, formElement, formData ) {
  return Array.from(
    formElement.querySelectorAll(`[name^="attendees[${index}]['acf']"]`))
    .filter( input => input.value !== "" )
    .map( input => {
      const name = extractAcfInputs( input.getAttribute('name') );
      switch(name) {
        case 'course_prerequisites_met':
          return [ name,  extractCoursePrerequisitesMetFieldValue( index, formElement, formData ) ];
          break;
        default:
          return [ name, determineAcfValue( input.value) ]
      }
    }
    );
}

function extractCoursePrerequisitesMetFieldValue( index, formElement, formData ) {
  const existingCoursePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['meta']['course_prerequisites_met']`).map(Number).filter(Number);
  const courePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['acf']['course_prerequisites_met']`).map(Number).filter(Number);
  // set ensure array values are unique
  const set = new Set(
    [
      ... existingCoursePrerequisitesMetProductIds,
      ... courePrerequisitesMetProductIds
    ]
  );
  return [ ... set ];
}

/**
 * @todo use orderUtils.getUpdateAttendeeRequestBody()
 */
function createAttendeesRequestBody( index, formElement, groupId, orderId ) {
  const formData = new FormData(formElement);
  const attendeeId = formData.has(`attendees[${index}]['id']`) ? parseInt(formData.get(`attendees[${index}]['id']`)) : null;
  const body = {
    path: attendeeId ? `/wp/v2/attendee/${attendeeId}?order_id=${orderId}` : `/wp/v2/attendee?order_id=${orderId}`,
    method: 'POST',
    headers: {
      "X-WP-Nonce": props.nonce
    },
    body: {
      id: attendeeId,
      status: formData.has(`attendees[${index}]['status']`) ? formData.get(`attendees[${index}]['status']`) : 'publish',
      meta: {
        'groups-read': [
          ... new Set(
            formData.getAll(`attendees[${index}]['meta']['groups-read']`).map(Number).filter(Number).concat( parseInt(props.groupId) )
          )
        ],
        order_ids: [
          ... new Set(
            formData.getAll(`attendees[${index}]['meta']['order_ids']`).map(Number).filter(Number).concat( parseInt(props.order.id) )
          )
        ],
        product_ids: [
          ... new Set(
            formData.getAll(`attendees[${index}]['meta']['product_ids']`).map(Number).filter(Number).concat( parseInt(props.product.id) )
          )
        ]
      },
      acf: assembleAcfFieldsForRequestBody( index, formElement, formData )
    }
  };
  return body;
}

/**
 * Checkboxes require boolean
 */
function determineAcfValue( value ) {
  return value === "true" ? true : value === "false" ? false : value
}

/**
 * @param { string } name ACF input field's name attribute
 */
function extractAcfInputs( name ) {
  const match = name.match(/attendees\[\d+\]\['acf'\]\['(.+)'\]/)
  return match ? match[1] : null;
}

/**
 * @param { number } quantity Number of attendees
 * @param { HTMLElement } form
 * @param { number } groupId
 * @param { number } orderId
 * @return object
 */
function createBatchRequestBody( quantity, formElement, groupId, orderId) {
  return range(quantity).map( index => {
    return createAttendeesRequestBody( index, formElement, groupId, orderId );
  });
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
  assembleAcfFieldsForRequestBody,
  extractAttendeeByIndex,
  extractCoursePrerequisitesMetFieldValue,
  createAttendeesRequestBody,
  determineAcfValue,
  extractAcfInputs,
  createBatchRequestBody,
  extractAttendeeIdsFromResponse,
  extractIndexedEmployeeNumbersFromForm,
  extractLastIndexOfDuplicateEmployeeNumberField,
  countOccurrencesOfEmployeeNumber
}
