// Kata 2. ¿Soy palíndromo?
// NIVEL 1: Crea una función que determine si UNA PALABRA es palíndromo ( se lee igual de izquierda a derecha que viceversa), devolviendo true/false.
// NIVEL DOS: La función debe aceptar frases de más de una palabra.
// NIVEL TRES: La función debe aceptar uso de mayusculas y minúsculas.

// Respuesta: NIVEL 1

function esPalindromo1(palabra) {
  let punteroIzquierdo = 0;
  let punteroDerecho = palabra.length - 1;

  while (punteroIzquierdo < punteroDerecho) {
    if (palabra[punteroIzquierdo] !== palabra[punteroDerecho]) {
      return false;
    }
    punteroIzquierdo += 1;
    punteroDerecho -= 1;
  }

  return true;
}

// Respuesta: NIVEL 2

function esPalindromo2(palabra) {
  let punteroIzquierdo = 0;
  let punteroDerecho = palabra.length - 1;

  while (punteroIzquierdo < punteroDerecho) {
    if (palabra[punteroIzquierdo] == " ") {
      punteroIzquierdo += 1;
    } else if (palabra[punteroDerecho] == " ") {
      punteroDerecho -= 1;
    } else {
      if (palabra[punteroIzquierdo] !== palabra[punteroDerecho]) {
        return false;
      }
      punteroIzquierdo += 1;
      punteroDerecho -= 1;
    }
  }

  return true;
}

// Respuesta: NIVEL 3

function esPalindromo3(palabra) {
  palabraFormateada = palabra.toLowerCase();
  let punteroIzquierdo = 0;
  let punteroDerecho = palabra.length - 1;

  while (punteroIzquierdo < punteroDerecho) {
    if (palabraFormateada[punteroIzquierdo] == " ") {
      punteroIzquierdo += 1;
    } else if (palabraFormateada[punteroDerecho] == " ") {
      punteroDerecho -= 1;
    } else {
      if (
        palabraFormateada[punteroIzquierdo] !==
        palabraFormateada[punteroDerecho]
      ) {
        return false;
      }
      punteroIzquierdo += 1;
      punteroDerecho -= 1;
    }
  }

  return true;
}

// Comprobamos respuestas

// Nivel 1 (debe retornar True)
console.log("reconocer");

// Nivel 2 (debe retornar True)
console.log("a luna ese anula");

// Nivel 3 (debe retornar True)
console.log("A Luna ese anula");
