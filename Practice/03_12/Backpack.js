/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

class HomeObject {
  constructor(name, materialUsed, use) {
    this.name = name;
    this.materialUsed = materialUsed;
    this.use = use;
  }
  describe() {
    return `${this.name} is made of ${this.materialUsed} and used for ${this.use}.`;
  }
}

class HandBag {
  constructor(name, color, straps, clothes, shoes) {
    this.name = name;
    this.color = color;
    this.straps = straps;
    this.shoppingBag = {
      clothes: clothes,
      shoes: shoes,
    };
  }
}

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    //initialize the parent class properties
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    //new property specific to HikingBackpack
    this.hydrationCapacity = hydrationCapacity;
  }
}
export { Backpack, HomeObject, HandBag, HikingBackpack };
