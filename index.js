// "use strict";

// const map1 = new Map();
// console.log(map1);
// map1.set("bar", "fig");
// map1.set(null, null);
// map1.set(true, 1);
// const sum = (a, b) => a + b;
// map1.set(sum, sum(5, 7));

// console.log(map1.get("bar"));

// console.log(map1.has(sum));
// console.log(map1.has(1));
// if (map1.has(null)) {
//   map1.delete(null);
// }
// // map1.clear()
// console.log(...map1.entries());
// console.log(map1.keys());
// console.log(map1.values());
// console.log(map1);

const dictionary = new Map();

dictionary.set("пес", "dog" );
dictionary.set("кіт", "cat");
dictionary.set( "риба","fish");
dictionary.set( "ранок","morning");
dictionary.set("go", "йти");
dictionary.set("catch", "виловити");
dictionary.set("fun", "веселощі");
dictionary.set("and", "i");
dictionary.set("river", "річка");
dictionary.set("see", "побачити");
dictionary.set("at", "на");

const sent = "Пес i кiт ранок йти на рiчка,побачити риба i виловити";
const translate = (str, dictionary) => {
  const lowerStr = str.toLowerCase();
  const words = lowerStr.split(" ");
  console.log(words);
  const newWords = words.map((word)=>{
    return dictionary.get(word)
  })
  console.log(newWords)
const newStr = newWords.join(' ')
console.log(newStr);
};

console.log(translate( sent, dictionary));
console.log(translate( sent, dictionary));
console.log(translate( sent, dictionary));
