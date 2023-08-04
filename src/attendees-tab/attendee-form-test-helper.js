
function generateAcfFormDataForAttendees( attendees ) {
  const form = new FormData();
  attendees.forEach( ( fields, index ) => {
    for( const name in fields ) {
      form.set(`attendees[${index}]['acf']['${name}']`, fields[name] );
    }
  });
  return form;
}

/**
 * @param {Number} index
 * @param {Object[]} fields 
 */
function generateMetaFormDataForAttendeeWithIndex( index, meta ) {
  const form = new FormData();
  meta.forEach( fields => {
    for( const name in fields ) {
      form.append(`attendees[${index}]['meta']['${name}']`, fields[name] );
    }
  });
  return form;
}

export {
  generateAcfFormDataForAttendees,
  generateMetaFormDataForAttendeeWithIndex
}
