function sumSalary(salaries) {
  // ваш код...
  let sum_money = 0; // сумма зарплат
  for(let key in salaries){ // перебираем все свойства заданного объекта
    let property = salaries[key]; // получаем значение очередного свойства
    if(property === Infinity || property === -Infinity){ // проверка на Infinity
      property = ' '; // пребразуем свойство в строку
    }
    if(property != property){ // проверка на NaN
      property = ' '; // пребразуем свойство в строку
    }
    if(typeof property == 'number' ){ // Если мы нашли число,
      sum_money = sum_money + property; // то прибавляем его к сумме зарплат
    }
  }
  return sum_money;
}
