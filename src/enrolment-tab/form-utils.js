
function removeEmptyEntries( formData ) {
  for (const pair of formData.entries()) {
    if( pair[1] === "" ) {
      formData.delete( pair[0]);
    }
  }
  return formData;
}

export {
  removeEmptyEntries
};
