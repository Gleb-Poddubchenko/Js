"use strict";

// let count = 0;
// function counter() {
//   count++;
//   return count;
// }

// function counter() {
//   let count = 0;
//  function insideCounter() {
//     count++;
//     return count;
//   };
//   return insideCounter;
// }
const counter =(count=0)=>()=>++count;

const counter1 = counter();
