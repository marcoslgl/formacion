/* Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido */
//creo la clase user para normalizar el codigo
class User {
  //normalizo todo al ingles para que sea todo el codigo igual
  constructor(name, last, age, profession, salary) {
    this.name = name;
    this.last = last;
    this.age = age;
    this.profession = profession;
    this.salary = salary;
  }
}
//cambio const por var para poder redeclarar la variable y elimino el user duplicado
user = new User("Pedro", "Sánchez", 45, "Barro man", 1000);

console.log(nombreUsuario(user));

//simplifico la funcion
function nombreUsuario(user) {
  return `me llamo ${user.name} ${user.last}`;
}

/* Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario */

//teniendo ya la funcion nombreUsuario la reutilizo para no repetir codigo y creo la funcion para sacar el salario anual
function annualSalary(user) {
  return `cobro ${user.salary * 12}€ al año`;
}

//creo la funcion userData que unifica las otras dos para evitar repeticion de codigo
const userData = (user) => {
  return `${nombreUsuario(user)} y ${annualSalary(user)}`;
};

console.log(userData(user));

/* Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€ */
user = new User("Álvaro", "Morón", 30, "Barro man", null, "Morocco");

function esExtrangero(user) {
  if (user.nationality != "España" && user.age == 30) {
    //cambio la anidacion de ifs y lo comparo con and ya que necesita cumplir ambas condiciones
    return "Apto para la ayuda del gobierno";
  }
  return "No es apto para la ayuda del gobierno";
}

console.log(esExtrangero(user));
