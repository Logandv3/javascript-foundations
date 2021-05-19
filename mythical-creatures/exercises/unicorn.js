


class Unicorn {
  constructor(name, color, sparklyingStuff) {
    this.name = name;
    this.color = color || "white";
    this.sparklyingStuff = "";
  }
  isWhite(color) {
    if (color = this.color) {
      return false;
    }
  }
  says(sparklyingStuff) {
    return `**;* ${sparklyingStuff} *;**`;
  }
}

module.exports = Unicorn;
