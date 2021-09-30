function isEmpty(obj) {
  // ваш код...
  let result = true;
  for (let key in obj){
    result = false;
  }
  return result;
}
