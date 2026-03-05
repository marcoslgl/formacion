//¿Qué salida tendrán los siguientes console.log?

// Comparaciones con booleanos
console.log(false + false); // devuelve 0 porque false se convierte a 0
console.log(false + true); // devuelve 1 porque false se convierte a 0 y true se convierte a 1
console.log(true + true); // devuelve 2 porque true se convierte a 1

// Comparaciones con arrays
//console.log([] === []);  devuelve false porque son dos objetos con distinta referencia en memoria
//console.log([1, 2] === [1, 2]);  lo mismo que el anterior
//console.log([1] === [1]);  lo mismo que el anterior

// Operaciones con arrays
console.log([] + []); // devuelve una cadena vacia
console.log([1, 2] + [3, 4]); // devuelve "1,23,4" porque los arrays se convierten a cadenas
console.log([1] + 1); // devuelve 11 porque el array se convierte a cadena y se concatena
console.log([1] - 1); // devuelve 0 porque el array se convierte a numero y se resta 1

// Comparaciones con objetos
//console.log({} + {});  devuelve "[object Object][object Object]" porque los objetos se convierten a cadenas
//console.log({} === {});  devuelve false porque son dos objetos con distinta referencia en memoria
//console.log([] === {});  devuelve false porque son tipos diferentes

// Comparaciones especiales
console.log(null + 1); // devuelve 1 porque null se convierte a 0
console.log(undefined + 1); //devuelve NaN porque undefined no se puede convertir a numero
console.log(null == 0); // devuelve false porque null solo es igual a undefined
console.log(null <= 0); // devuelve true porque null se convierte a 0 y 0 es menor o igual a 0
console.log(undefined == null); // devuelve true porque null solo es igual a undefined

// Operaciones con NaN
console.log(NaN + 1); // devuelve NaN porque cualquier operación con NaN devuelve NaN
console.log(NaN == NaN); // devuelve false porque NaN no es igual a nada, ni siquiera a si mismo
console.log(NaN === NaN); // devuelve false por lo mismo que el anterior
