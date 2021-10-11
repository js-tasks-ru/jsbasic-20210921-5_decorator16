function showSalary(users, age) {
  // ваш код...
  let arr_filter = users.filter(item => item.age <= age);
  let result = '';
  for(let i = 0; i < arr_filter.length; i++){
    result += arr_filter[i].name + ', ' + arr_filter[i].balance;
    if(i != (arr_filter.length - 1)){
      result += '\n';
    }
  }
  return result;
}
