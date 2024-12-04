/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import { Backpack, homeObject, handBag } from "./Backpack.js";
const denri = new Backpack("denri", 30, "red", 4, 26, 26, false);
const newHandBag = new handBag("cleanShelf", "green-red", 2, 5, "Highheels");

console.log(newHandBag);
console.log(denri);

const jiko = new homeObject("Jiko", "clay", "cooking");

console.log(jiko);
console.log(jiko.describe());
