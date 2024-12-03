/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const toolBag = {
  name: "kendo",
  color: "orange-black",
  allanKey: {
    1: "3mm",
    2: "9mm",
    3: "8mm",
  },
  multimeter: "CHY",
};

console.log("My toolbag object:", toolBag);
console.log("My toolbag name is:", toolBag.name);
console.log("My allanKey 1:", toolBag.allanKey[1]);

const laptopBag = {
  name: "dr denri",
  color: "black",
  envelope: {
    name: "grvc",
    receipt: 100,
  },
  spectacase: {
    simCard: "safaricom",
    glasses: 1,
  },
};

console.log("my laptopBag object:", laptopBag);

//car object
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

console.log(car);
console.log("The model of the car is:", car.model);

car.year = 2022;
console.log("updated car:", car);

car.describe = function () {
  return `This is a ${this.make} ${this.model} from ${this.year}.`;
};

console.log(car);
console.log(car.describe());
