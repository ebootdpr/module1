'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n <= 0) return 1
   return n * nFactorial(n - 1)
}
/* 
 crear una función
   return: el número de la secuencia que esté en la posición pasada por parámetro.*/
// EJERCICIO 2
function nFibonacci(n) {
   if (n <= 0) return 0
   if (n == 0) return 1
   if (n == 1) return n
   return nFibonacci(n - 2)+ nFibonacci(n - 1)
 }

// EJERCICIO 3

/* En este último ejercicio no será necesario que utilices recursión. 
Aquí deberás implementar una clase llamada Queue. 
Esta clase tendrá distintos métodos que reflejarán el comportamiento característico de la estructura de datos.

Te invitamos a que resuelvas este ejercicio de las dos maneras posibles: */
function Queue() {
   this.myQueue = [];
}
Queue.prototype.size = function () {return this.myQueue.length}

Queue.prototype.dequeue = function () {
   if(this.size()==0) return undefined
   
    return this.myQueue.pop()
}
Queue.prototype.enqueue = function (arg) {

    return this.myQueue.unshift(arg)
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
