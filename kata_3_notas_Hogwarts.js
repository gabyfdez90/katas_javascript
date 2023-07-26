// Kata 3: Notas de Hogwarts
// Dado este objeto:

let notasEstudiantes = {
  Harry: 81,
  Ron: 49,
  Hermione: 99,
  Draco: 74,
  Neville: 62,
};

// Convierte las notas numéricas de los estudiantes de Hogwarts en su nomenclatura habitual empleada en la saga:
// Extraordinario, Supera las expectativas, Aceptable, Insatisfactorio, Desastroso, Troll

// Para ello, obtenemos dos arrays (clave y valor) a partir del objeto.
let conversionCalificaciones = Object.values(notasEstudiantes);
let listaEstudiantes = Object.keys(notasEstudiantes);

// Luego, iteramos por uno de los arrays para imprimir una cadena que incluye el estudiante y su nota.

for (let i = 0; i < conversionCalificaciones.length; i++) {
  let estudiante = listaEstudiantes[i];
  let nota = conversionCalificaciones[i];
  if (nota >= 91) {
    console.log(estudiante + " sacó una calificación de: Extraordinario");
  } else if (nota >= 81 && nota <= 90) {
    console.log(estudiante + " sacó una calificación de: Supera expectativas");
  } else if (nota >= 71 && nota <= 80) {
    console.log(estudiante + " sacó una calificación de: Aceptable");
  } else if (nota >= 61 && nota <= 70) {
    console.log(estudiante + " sacó una calificación de: Insatisfactorio");
  } else if (nota >= 51 && nota <= 60) {
    console.log(estudiante + " sacó una calificación de: Desastroso");
  } else {
    console.log(estudiante + " sacó una calificación de: Troll");
  }
}
