"use strict";
const COLOR = ["red", "gray", "rainbow"];
class Squirrel {
  constructor(name,color) {
    this._name = name;
    this._color = color;
  }
  jump() {
    return `${this._name} jumping`;
  }
  get() {
    return this._name;
  }
  set(value) {
    if (value.length < 3) {
      throw new Error("must be >3");
    }
    return this._name = value;
  }
  get color() {
   return this._color;
  }
  set color(value) {
    if(typeof value !== 'string'){
      throw new Error('must be string')
    }
    if (!COLOR.includes(value)) {
      throw new Error("must be red , gray ,rainbow");
    }
     return this._color = value;
  }
  
}

const User1 = new Squirrel("Belka", "вred");

console.log(User1);
console.log(User1);
console.log(User1);
console.log(User1);

