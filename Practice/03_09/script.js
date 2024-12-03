/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newPocketNum: function (number) {
    this.pocketNum = number;
  },
  newColor: function (color) {
    this.color = color;
  },
  newVolume: function (volume) {
    this.volume = volume;
  },
  newName: function (name) {
    this.name = name;
  },
};

console.log("The backpack name before:", backpack.name);

backpack.newName("Denri");

console.log("The backpack name after:", backpack.name);

console.log("The backpack volume before:", backpack.volume);

backpack.newVolume(60);

console.log("The backpack volume after:", backpack.volume);
