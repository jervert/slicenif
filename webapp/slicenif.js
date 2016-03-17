var fieldDni = document.getElementById('c_dni'),
  fieldLetter = document.getElementById('c_letra'),
  buttonCalculate = document.getElementById('bt_calculate'),
  letraDni = function (dni) {
    return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(parseInt(dni, 10) % 23);
  },
  calculate = function (e) {
    e.preventDefault();
    fieldLetter.setAttribute('value', letraDni(fieldDni.value));
  };

fieldDni.addEventListener('keyup', calculate, false);
buttonCalculate.addEventListener('click', calculate, false);