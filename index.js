"use strict";
console.log("1");

const id = setTimeout(() => {
  console.log("subscribe");
}, 3000);

document.getElementById('btn');

btn.addEventListener('click',({target})=>{
    clearTimeout(id);
})

// clearTimeout(id)

console.log("2");
