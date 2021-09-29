/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  if (name == null) { // Проверка на то, что имя пустое
    return false;
  } else if (name.indexOf(' ') != -1) { // Проверка на то, что в имени нет пробелов
    return false;
  } else if (name.length < 4) { // Проверка на длину имени
    return false;
  } else { // Все условия выполнены
    return true;
  }
}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
