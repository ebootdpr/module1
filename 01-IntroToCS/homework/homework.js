'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let palabra = String(num)
  let decimal = 0

  for (let i = 0; i < palabra.length; i++) {

    let pos = parseInt(palabra[i])
    decimal += pos * Math.pow(2, i)
    console.log(Math.pow(2, i))
  }
  return decimal
}


var binario = [] //declaracion array vacio
function rellenarArray(input,arr) { //esta funcion es para escribir menos, o para confundir mas
  if (input === 0) {
    arr.unshift(0) //pone un 0 al principio si es par o resto=0
  } else  {
    arr.unshift(1) //pone un 1 al principio si es impar o resto=1
  }
}

function DecimalABinario(num) {
  // LINEA 27
  if (num > 0) {
    rellenarArray(num % 2,binario) //esto ejecuta la funcion para ir rellenando el array de forma inversa
    return DecimalABinario(Math.floor(num / 2)) //SALTA A LA LINEA 27, pero ahora con num=num/2
  } else {
    let myBackup = binario //para resetear la variable y que se pueda volver a usar la funcion.
    binario = [] //reseteo de varaible binario a un array vacio.
    return myBackup.join('') //return final, tiene q ser string, porq el testeo lo dice
  }
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}