'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;


}
function Node(DATA) {
  this.value = DATA;
  this.next = null;
}

LinkedList.prototype.add = function (DATO) {
  let newNodo = new Node(DATO) //guarda en dato en el nodo
  let current = this.head //guarda instancia de cola serpiente en variable


  if (!this.head) { //entra cuando es la primera vez q creamos la lista 
    this.head = newNodo //crea la cola de la serpiente
    return newNodo //lo pide el test. El enunciado no lo pide!
  }

  while (current.next) { //corta loop si el next == null
    current = current.next
  }
  current.next = newNodo //conecta el ultimo nodo al nuevo nodo!!
  return newNodo //lo pide el test.
}

LinkedList.prototype.remove = function () {
  let current = this.head //guarda la cola
  if (!current) { //si esta vacio
    return null; //devuelve null
  }
  if (!current.next) { //si el segundo es null
    this.head = null //elimina la cola de la serpiente
    return current.value
  }
  while (current.next.next) {
    current = current.next
  }
  var aux = current.next //instancia el siguiente nodo
  current.next = null
  return aux.value
}

LinkedList.prototype.search = function (term) {
  let current = this.head
  if (!current) {
    return null
  }

  while (current) {
    if (typeof term == 'function') {
      if (term(current.value)) {
        return current.value
      }
    } else if (current.value == term) {
      return current.value
    }
    current = current.next
  }
  return null
}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuestra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable(buckets) {
  this.numBuckets = buckets||35
  this.buckets = [] //array de objetos
}
/* 
ENTONCES:
el hash: codifica algo
el set: guarda 
*/

HashTable.prototype.hash = function (inputSTR) { //suma cada caracter y le hace el modulo, esa es la posicion 
  if(!this.isValidKey(inputSTR)) return 'No se puede hashear un string vacío' 
  let str = '' + inputSTR //para que el IDE sepa q es una string le sumo ''
  let sumatoria = 0
  for (let i = 0; i < str.length; i++) {
    // const element = str[i];
    sumatoria += str.charCodeAt(i)
  }
  console.log(sumatoria)
  console.log(sumatoria % this.numBuckets)
  let resto =sumatoria % this.numBuckets
  return resto
}


HashTable.prototype.set = function (key,valor) {
  //se debe hashear el key!!
  if(typeof key !=='string') throw new TypeError('Keys must be strings') 

  let pos = this.hash(key) //ubica la posicion en pos
  if(this.buckets[pos]){
    return this.buckets[pos][key]=valor
  } 

  let obj = {} //crea un objeto vacio
  obj[key]=valor
  return this.buckets[pos]=obj

 }

HashTable.prototype.get = function (key) {
  if(typeof key !=='string') throw new TypeError('Keys must be strings') 
  let pos = this.hash(key)
  if(pos>this.buckets.length) return undefined
  if(this.buckets[pos].hasOwnProperty(key)){
    return this.buckets[pos][key]
  }
}
HashTable.prototype.isValidKey= function (key){
  if(typeof key =='string' && key.length>0) return true
  return false
}
HashTable.prototype.isInRange =function(pos){
  if(pos>this.buckets.length&&this.buckets.length==0) return false
  return true
  
}
HashTable.prototype.hasKey = function (key) { 

  let pos = this.hash(key)
  if(!this.isInRange(pos)) return false
  for (let i = 0; i < this.buckets.length; i++) {
    const element = this.buckets[pos];
    if(element.hasOwnProperty(key)) return true
  }
  return false
  
  
}
let myObj2 = [{key: 2},{dada: 2},{dede: 2}]
console.log(myObj2[2]['key'])

let myHashTable = new HashTable()

console.log(myHashTable)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
