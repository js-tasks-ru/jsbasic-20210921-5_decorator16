function filterRange(arr, a, b) {
  // ваш код...
  let result = [];
  arr.map(function(item){
    if(item >=a && item <= b) result.push(item);
  });
  return result;
}
