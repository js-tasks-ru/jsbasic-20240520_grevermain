let calculator = {
  a: 0,
  b: 0,
     
  read(a1, b1){
     this.a = a1;
     this.b = b1;
  },

  sum(){
    return calculator.a + calculator.b
  },

  mul(){
    return calculator.a * calculator.b
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
