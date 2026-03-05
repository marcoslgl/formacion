/*Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log*/

console.log(a);
var a = "hola";
// devuelve undefined porque se declara a pero no tiene valor hasta la siguiente linea

console.log(b);
let b = "hola";
// devuelve un error porque b no se puede usar antes de ser declarada con let

console.log(c);
const c = "hola";
// devuelve un error porque c no se puede usar antes de ser declarada con const
sayHi();
// devuelve "Hola desde sayHi!" ya que se puede llamar a las funciones antes por el hoisting

function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();
// devuelve "Adios desde sayBye!" ya que se puede llamar a las funciones antes o despues por el hoisting
