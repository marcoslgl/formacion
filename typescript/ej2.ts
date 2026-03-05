import { Animal } from "./ej1";
interface Dog extends Animal {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
}
const dog: Dog = {
  name: "Perro",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 5,
};
console.log(dog);

const dog2: Dog = {
  name: "Perro2",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Husky",
  age: 10,
};
console.log(dog2);

const dog3: Dog = {
  name: "Perro3",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Chucho",
  age: 7,
};
console.log(dog3);
