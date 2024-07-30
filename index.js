const arr1 = [4, 5, 9, 4, 8, 6, 9, 4, 9];

const setArr1 = new Set(arr1);
console.log(setArr1);
const uniqArr1 = [...setArr1];
console.log(uniqArr1);
const uniqArr2 = [...new Set(arr1)];
console.log(uniqArr2);

set1 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.delete(1);
console.log(set1);

// console.log(set1.entries());

console.log(...setArr1.entries());
console.log([...setArr1.keys()]);
console.log(...setArr1.values());

console.log(setArr1.has(4));

const sent1 = "Set.prototype";
const sent2 = "to be or not to be";

const letters = new Set(sent2.split(" "));
console.log(letters);

