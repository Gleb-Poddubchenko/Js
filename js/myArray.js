
const myArrayPrototype = {};
myArrayPrototype.push = function (value) {
   this[this.length] = value;
   this.length++;
   return this.length;
}

function MyArray() {
   this.length = 0;
}

MyArray.prototype = myArrayPrototype;