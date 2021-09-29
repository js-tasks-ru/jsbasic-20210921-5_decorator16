function checkSpam(str) {
  // ваш код...
  let str_title = str.toUpperCase(); // Преобразуем все символы аргумента функции в заглавные
  let spam = 0; // указатель на спам: если spam == 1, то спам есть, а если spam == 0, то спама нет
  // Анализируем содержание аргумента функции
  if(str_title.indexOf('1XBET') != -1){ //  нашлось '1xBet'
    spam = 1;
  }
  if(str_title.indexOf('XXX') != -1){ //  нашлось 'XXX'
    spam = 1;
  }
  // Делаем вывод
  if(spam == 1){
    return true;
  } else {
    return false;
  }
}
