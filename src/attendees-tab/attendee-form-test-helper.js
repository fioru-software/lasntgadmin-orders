
function generateAcfFormData( attendees ) {
  const form = new FormData();

  attendees.forEach( ( fields, index ) => {
    for( const name in fields ) {
      form.set(`attendees[${index}]['acf']['${name}']`, fields[name] );
    }
  });

  return form;
}

export {
  generateAcfFormData
}
