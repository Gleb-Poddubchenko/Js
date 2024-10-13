"use strict";
// console.log("1");

// const id = setInterval(() => {
//   console.log("subscribe");
// }, 3000);

// document.getElementById('btn');

// btn.addEventListener('click',({target})=>{
//     clearInterval(id);
//     console.log('clear');

// })

// // clearTimeout(id)

// console.log("2");

function work() {
  let number = 1;

  let interval = setInterval(() => {
    console.log(number);
    number++;

    if (number > 10) clearInterval(interval);
  }, 500);
}
work();
