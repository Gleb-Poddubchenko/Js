"use strict";

const btns = document.querySelectorAll("#wrapper-btn button");

console.log(btns);

const wrapperBtn = document.getElementById("wrapper-btn");

const btns2 = wrapperBtn.children;

console.log(btns2);

function handlerBtn(event) {
  const elem = event.target;
  const color = elem.dataset.color;
  console.log(elem.dataset.color);
  wrapperBtn.style.backgroundColor = color;
}

for (const btn of btns2) {
  btn.addEventListener("click", handlerBtn);
}
