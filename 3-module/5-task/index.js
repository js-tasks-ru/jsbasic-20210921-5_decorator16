function getMinMax(str) {
  // ваш код...
  let arr_number = []; // только числа
  let arr_symbol = str.split(' ');
  for(let i = 0; i < arr_symbol.length; i++){
    let number = 1 * arr_symbol[i];
    if(number == number){
      arr_number.push(+arr_symbol[i]);
    }
  }
  let min = 1;
  let max = 1;
  for(let j = 0; j < arr_number.length; j++){
    if(arr_number[j] < min){
      min = arr_number[j];
    }
    if(arr_number[j] > max){
      max = arr_number[j];
    }
  }
  let result = {};
  result.min = min;
  result.max = max;
  return result;
}
