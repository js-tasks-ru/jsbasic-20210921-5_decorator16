function truncate(str, maxlength) {
  // ваш код...
  if(str.length < maxlength){ // если длина строки не превышает заданную
    return str;
  } else { // если длина строки превышает заданную
    let str_maxlength = str.slice(0, maxlength - 1); // начальная часть строки
    return str_maxlength + '…';
  }
}
