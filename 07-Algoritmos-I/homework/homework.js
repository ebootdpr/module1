'use strict'
// No cambies los nombres de las funciones.

// Factorear el número recibido como parámetro y devolver en un array
// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
// Tu código:
function factorear(num) {
  let arrFactores = [1] //array de factores
  let fact = 2 //factor a checkear
  while (num > 1) {
    if (num % fact == 0) { //si es factor, entra
      arrFactores.push(fact) //pushea al array de factores
      num = num / fact //cambia num para evitar bucle infinito
      //y seguir analizando
    } else { //si no es factor, prueba siguiente
      fact++
    }
  }
  return arrFactores //FIN

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //toma 2 en ubicacion i-ésmia;
  //los compara, y los reubica, vuelve a iniciar
  let save = 0
  let count = 0
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      save = array[i + 1]
      array[i + 1] = array[i]
      array[i] = save
      count++
    }
  }
  //entra en bucle infinito?
  if (count == 0) return array
  //lo voy a hacer con recursiviad
  return bubbleSort(array)
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //toma 1 numero lo compara con todos los anteriores
  //voy a empezar desde la derecha
  let len = array.length
  let backup = 0
  for (let i = 0; i < len; i++) {
    // i es el elegido 
    //lo comparo con todos los anteriores:
    for (let j = i; j >= 0; j--) { //se recorre al revés
      if (array[i] < array[j]) {
        //si el elegido es menor que uno de la IZQ
        //lo sustituye
        backup = array[j]
        array[j] = array[i]
        array[i] = backup
        //ojo, i ahora es j!
        i = j
      }
    }
  }
  return array
}


function selectionSort(array) {
  let len = array.length
  let AUX = 0
  let pos = 0
  for (let i = 0; i < len; i++) {
    AUX = array[i]
    pos=i
    for (let j = i; j < len; j++) { //se recorre al revés
      if (array[j]<AUX) {
        AUX=array[j]
        pos=j
      }
    }
    array[pos] = array[i]
    array[i] = AUX
  }

  return array
}
console.log(selectionSort([333,2,7,3,5,1,9,8,12,44]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
