"use strict";
console.log("1");

const id = setInterval(() => {
  console.log("subscribe");
}, 3000);

document.getElementById('btn');

btn.addEventListener('click',({target})=>{
    clearInterval(id);
})

// clearTimeout(id)

console.log("2");
