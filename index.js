"use strict";

const map1 = new Map();
console.log(map1);
map1.set("bar", "fig");
map1.set(null, null);
map1.set(true, 1);
const sum = (a, b) => a + b;
map1.set(sum, sum(5, 7));

console.log( map1.get('bar'))

console.log(map1.has(sum));
console.log(map1.has(1));
if(map1.has(null)){
  map1.delete(null)
}
// map1.clear()
console.log(...map1.entries());
console.log(map1.keys());
console.log(map1.values());
console.log(map1);




