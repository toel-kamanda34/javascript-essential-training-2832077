/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// use join to output the array as a string
//inside the brackets you can choose how the output shoud be separated
console.log(backpackContents.join());
//separated with space
console.log(backpackContents.join(" "));
//separated with comma and space
console.log(backpackContents.join(", "));
//separated with |
console.log(backpackContents.join(" | "));

backpackContents[backpackContents.length] = 5;
console.log(backpackContents);

backpackContents.push("pencil", 5);
console.log(backpackContents);

backpackContents.unshift("Toel", 23);
console.log(backpackContents);
// shift method removes the first item, unshift adds items to the first /zero index
backpackContents.shift();
console.log(backpackContents);

//pop removes items from the last index
backpackContents.pop();
console.log(backpackContents);

// we can use the forEach loop function to get items on the loop and do some actions to them
backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});
// array still remains the same, it is not affected
console.log(backpackContents);

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
