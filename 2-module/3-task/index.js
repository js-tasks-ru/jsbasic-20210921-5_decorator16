let calculator = {
  // ваш код
  read(a, b){
    this.a_property = a;
    this.b_property = b;
  },
  sum(){
    return this.a_property + this.b_property;
  },
  mul(){
    return this.a_property * this.b_property;
  },
  a_property: 0,
  b_property: 0,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
