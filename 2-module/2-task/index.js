function isEmpty(obj) {
  for (let key in obj) {
    if (obj[key] !== null ) {
      return false;
    } else if (obj[key] !== undefined){
      return true;
    }
  }
  return true;
}

