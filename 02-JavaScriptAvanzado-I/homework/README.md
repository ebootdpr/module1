
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```
10 //de variable local a c()
8 //del parametro a pasado a c()
8 //del parametro a pasado a f() (porque se reasigna "a" a "b") 
9 //del parametro b pasado a c()
10 //de la variable global B
1 //de la variable global x
```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```
error
error
'Hola!'

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```
'Tony' //fail
'Franco' //porque lo del scope solo funciona on funciones

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
'Tony'
'Franco'
'Tony'

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
Error let already asigned o algo asi
'The Flash'
'Franco' //fail, parece q solo dentro de funciones no se puede reasignar
'Reverse Flash' //reemplazo a la linea de arriba
'The Flash'
'Franco' //Let se borra dentro del scope

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        //2
"2" * "3"      //6  // '23'
4 + 5 + "px"   //'9px'
"$" + 4 + 5    // '$45'
"4" - 2        // 2
"4px" - 2      // '2px' //NaN Not a Number
7 / 0          // overflow //Infinity
{}[0]          // no se //Array[0] valor 0 en entrada 0
parseInt("09") // 9
5 && 2         // 2
2 && 5         // 5
5 || 0         // 5
0 || 5         // 0  //5 El cero es false!!!!
[3]+[3]-[10]   // No se // 23 + => concatenan, - => Resta 
3>2>1          // Error //False
[] == ![]      // False // True  ??? Debe ser porq tiene la misma forma
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(zz);
   console.log(foo());

   var zz = 1;
   function foo() {
      return 2;
   }
}

test();


```
Undefined //Se declaro "a" pero no se le asigno un valor en Ejecution Context
2   //foo() ya está almacenada en la memoria lista para usarse en el EJecution 


Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```
Undefined
Ya que al declarar var dentro de la funcion ya, aunque nunca pase por esa linea, el interpretador ya te lo reasigno snack = undefined durante el contexto de funcion.



### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname; //test=function, adentro de test se mete la funcion, entonces cuando se llame, this haraá referencia a el objeto donde se invoque, en este caso, el global function

console.log(test());
```


### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //primero este se EJECUTA
   setTimeout(function() { console.log(2); }, 1000); //Luego este al apsar 1 segundo
   setTimeout(function() { console.log(3); }, 0); //Luego este
   console.log(4); //Luego este
}

printing();
```
