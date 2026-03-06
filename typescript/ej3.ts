import { Animal } from "./ej1";

type Cat = Omit<Animal, "canEat" | "canDrink" | "canFly"> & {
  color: string;
};

const cat: Cat = {
  name: "Gato",
  canSleep: true,
  color: "Negro",
};
console.log(cat);

type snake = Omit<Animal, "name" | "canFly">;

const snake: snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};
console.log(snake);
