import { Animal } from "./ej1";

interface Cat extends Omit<Animal, "canEat" | "canDrink" | "canFly"> {
  color: string;
}

const cat: Cat = {
  name: "Gato",
  canSleep: true,
  color: "Negro",
};
console.log(cat);

interface snake extends Omit<Animal, "name" | "canFly"> {}

const snake: snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};
console.log(snake);
