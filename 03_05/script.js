/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("This is the backpack object,", backpack);
console.log("The pocketNum is:", backpack.pocketNum);
console.log("The strapLength L:", backpack.strapLength.left);

var query = "pocketNum";
console.log("The pocketNum is:", backpack[query]);
