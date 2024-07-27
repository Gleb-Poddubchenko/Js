// "use strict";
// const COLOR = ["red", "gray", "rainbow"];
// class Squirrel {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   jump() {
//     return `${this._name} jumping`;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 3) {
//       throw new Error("must be >3");
//     }
//     this._name = value;
//   }

//   set color(value) {
//     if (typeof value !== "string") {
//       throw new Error("must be string");
//     }
//     if (COLOR.includes(value) === false) {
//       throw new Error("must be red , gray ,rainbow");
//     }
//     this._color = value;
//   }
//   get color() {
//     return this._color;
//   }
// }

// const User1 = new Squirrel("Belka", "red");

// try {
//   const User1 = new Squirrel("Belga", "red");
//   console.log(User1);
//   console.log(User1.jump());
// } catch (error) {
//   console.error(error.message);
// }
// const WORDS = ["I", "am", "a", "magic", "sqirrel"];
// class FlySquirrel extends Squirrel {
//   constructor(name, color, number) {
//     super(name, color);
//     this.number = number;
//   }
//   get number() {
//     return this._number;
//   }
//   set number(value) {
//     if (value < 0 || value > 50) {
//       throw new RangeError("must be 0-50");
//     }
//     this._number = value;
//   }
//   jump() {
//     return super.jump();
//   }
//   fly() {
//     return `${this.name} flying at max lenth ${this.number}`;
//   }
//   say() {
//     return WORDS.join(" ");
//   }
// }
// const User2 = new FlySquirrel("belka", "red", 20);
// try {
//   console.log(User2);
//   console.log(User2.say());
//   console.log(User2.jump());
//   console.log(User2.fly());
// } catch (error) {
//   error;
// }
