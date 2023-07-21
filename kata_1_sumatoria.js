// Kata 1. Sumatoria
// Escribe una función que encuentra la sumatoria de cada número desde 1 hasta num (parametro), siendo num > 0.

// Primera variante de solución: "For loop"

var sumatoria1 = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

// Segunda variante de solución: "While"

function sumatoria2(num) {
  let result = 0;
  while (num >= 1) {
    result += num;
    num -= 1;
  }
  return result;
}

// Comprobamos que ambas respuestas dan 253

console.log(sumatoria1(22));
console.log(sumatoria2(22));
