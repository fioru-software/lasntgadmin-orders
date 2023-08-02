
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

function extractEmployeeNumbersFromForm( quantity, form ) {
  const formData = new FormData(form);
  return range(quantity).map( ( index ) => {
    if( formData.has(`attendees[${index}]['acf']['employee_number']`) ) {
      return {
        index: index,
        value: formData.get(`attendees[${index}]['acf']['employee_number']`)
      };
    }
  }).filter( employeeNumber => ! isNull( employeeNumber ) ).reverse();
}

function validateUniqueEmployeeNumbers( quantity, form ) {
  const employeeNumbers = extractEmployeeNumbersFromForm( quantity, form );
  const formData = new FormData(form);
  let valid = true;
  for( const employeeNumber of employeeNumbers ) {
    const count = countOccurrencesOfEmployeeNumber( employeeNumber.value, employeeNumbers.map( obj => obj.value ) );
    const input = document.querySelector(`input[name="attendees[${employeeNumber.index}]['acf']['employee_number']"]`);
    if( count > 1 ) {
      const validationErrorMsg = __('Employee number must be unique.', 'lasntgadmin' );
      input.setCustomValidity( validationErrorMsg );
      input.reportValidity();
      setNotice({
        status: 'error',
        message: validationErrorMsg
      });
      valid = false;
      break;
    } else {
      input.setCustomValidity("");
    }
  }
  return valid;
}

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
  extractEmployeeNumbersFromForm,
  validateUniqueEmployeeNumbers,
  countOccurrencesOfEmployeeNumber
}
