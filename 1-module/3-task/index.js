function ucFirst(str) {
  // ваш код...
  if(str == ''){ // Если аргумент функции - пустая строка
    return '';
  } else if(str.lenght == 1){ // Если аргумент функции состоит из одного символа
    return str.toUpperCase();
  } else { // Если аргумент функции состоит из некольких символов
    let first_char; // первый символ в аргументе функции
    first_char = str.slice(0, 1);
    let string; // остальные символы в аргументе функции
    string = str.replace(first_char, '');
    return first_char.toUpperCase() + string;
  }
}
