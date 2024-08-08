"use strict";

const button = document.getElementById("unique");

const objMyEvent = new Event("myEvent");
// unique.dispatchEvent("myEvent");
unique.addEventListener("myEvent", handlerClick);

function handlerClick() {
  console.log("hsndlerClick");
  unique.removeEventListener("click", handlerClick);
  unique.disabled = true;
}

if (Math.random() > 0.5) {
  unique.dispatchEvent(objMyEvent);
}
