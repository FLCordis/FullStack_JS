"use strict";

var mediaAritSimples = function mediaAritSimples() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  return numeros.reduce(function (acumulador, numeroAtual) {
    return acumulador + numeroAtual;
  }, 0) / numeros.length;
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(mediaAritSimples(1, 2, 4, 5)));
var mediaAritPond = function mediaAritPond() {
  for (var _len2 = arguments.length, valores = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    valores[_key2] = arguments[_key2];
  }
  var sum = valores.reduce(function (acumulador, _ref) {
    var num = _ref.num,
      peso = _ref.peso;
    return acumulador + num * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var weightSum = valores.reduce(function (acumulador, entrada) {
    var _entrada$peso;
    return acumulador + ((_entrada$peso = entrada.peso) !== null && _entrada$peso !== void 0 ? _entrada$peso : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(mediaAritPond({
  num: 9,
  peso: 3
}, {
  num: 7,
  peso: 1
}, {
  num: 10,
  peso: 1
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var numerosOrd = [].concat(numeros).sort(function (a, b) {
    return a - b;
  });
  var meioArray = Math.floor(numerosOrd.length / 2);
  if (numerosOrd.length % 2 !== 0) {
    return numerosOrd[meioArray];
  }
  // 1, [2, 3], 4.
  // 4 dividido por 2 = 2. (O array começa no 0, então ele pega a pos 2 e 1 [no total de 0, 1, 2, 3]).
  var primeiroNumMeio = numerosOrd[meioArray - 1];
  var segundoNumMeio = numerosOrd[meioArray];
  return mediaAritSimples(primeiroNumMeio, segundoNumMeio);
};
console.log("Mediana: ".concat(mediana(2, 5, 10, 4, 7, 42)));
var moda = function moda() {
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd]]
  var quantidades = numeros.map(function (num) {
    return [num, numeros.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidades.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidades[0][0];
};
console.log("Moda: ".concat(moda(1, 1, 23, 42, 42, 42, 5, 4, 90, 4, 2, 4, 10, 4)));