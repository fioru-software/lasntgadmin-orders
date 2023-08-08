
/**
 * @param {Number} index
 * @param {Object[]} fields 
 */
function generateFormDataForAttendeeWithIndex( formData, index, key, attendeeFields ) {
  attendeeFields.forEach( fields => {
    for( const name in fields ) {
      formData.append(`attendees[${index}]['${key}']['${name}']`, fields[name] );
    }
  });
  return formData;
}

export {
  generateFormDataForAttendeeWithIndex
}
