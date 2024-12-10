/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 4,
  size: "medium",
};

function newBackPack(bag) {
  const newBag = document.createElement("article");
  newBag.innerHTML = `
        <h1>${bag.name}</h1>
        <ul>
        <li>Volume : ${bag.volume}</li>
        <li>Size : ${bag.size}</li>
        </ul>
`;
  return newBag;
}
const main = document.querySelector("main");
main.append(newBackPack(backpack));

const newBackPack1 = (bag) => {
  const newBag = document.createElement("article");
  newBag.innerHTML = `
          <h1>${bag.name}</h1>
          <ul>
          <li>Volume : ${bag.volume}</li>
          <li>Size : ${bag.size}</li>
          </ul>
  `;
  return newBag;
};

const main1 = document.querySelector("main");
main1.append(newBackPack1(backpack));
