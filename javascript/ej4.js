/* Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido */

const usuario = {
  //cambio var por const ya que no se va a modificar
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profession: "Barro man",
  //normalizo todo al ingles para que sea todo el codigo igual
};

console.log("me llamo " + nombreUsuario(usuario));

function nombreUsuario(user) {
  return `${user.name} ${user.last}`;
}

/* Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario */
var user = {
  //cambio const por var para poder redeclarar la variable
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profession: "Barro man",
};
//teniendo ya la funcion nombreUsuario la reutilizo para no repetir codigo y creo la funcion para sacar el salario anual
function annualSalary(user) {
  return user.salary * 12;
}

const userData = (user) => {
  return `me llamo ${nombreUsuario(user)} y cobro ${annualSalary(user)}€ al año`;
};

console.log(userData(user));

/* Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€ */
var user = {
  //cambio const por var para poder redeclarar la variable
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  if (user.nationality != "España" && user.age == 30) {
    //cambio la anidacion de ifs y lo comparo con and ya que necesita cumplir ambas condiciones
    return "Apto para la ayuda del gobierno";
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user));
