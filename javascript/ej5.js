/* Ejercicio 5, maps
Sigue los siguientes pasos:*/

//Crea un mapa llamado myMap
const myMap = new Map();

//Añade los siguientes key-valor al map
//Clave	Valor
//moroso	user (object)
const user1 = {
  name: "name1",
  last: "last1",
};
myMap.set("moroso", user1);

//agarrado	user (object)
myMap.set("agarrado", user1);

//generoso	user2 (object)
const user2 = {
  name: "name2",
  last: "last2",
};
myMap.set("generoso", user2);

function findAnimal() {
  return "animal encontrado";
}
//funcion	findAnimal (function)
myMap.set("funcion", findAnimal);

//color	color (string)
myMap.set("color", "negro");

//Muestra por consola todo el map
console.log(myMap);

//Muestra por consola el key moroso
console.log(myMap.get("moroso"));

//Comprueba si existe la key hola
console.log(myMap.has("hola"));

//Muestra por consola el tamaño total del map
console.log(myMap.size);

//Recorre el map con un forEach
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});
//Elimina el elemento agarrado del map
myMap.delete("agarrado");
console.log(myMap);
//Limpia el mapa por completo
myMap.clear();
console.log(myMap);
