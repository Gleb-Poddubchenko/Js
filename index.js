"use strict";

const unique = document.getElementById("unique");
const [main] = document.getElementsByTagName("main");
const section = document.querySelector("section");

console.log(main.getAttribute("title"));

console.log(main.hasAttribute("button"));

console.log(section.hasAttribute("button"));
console.log(main.setAttribute("title", "new value for main title"));
// like string
section.setAttribute("title", "title for section");

//different way


// like obj
const attrId = document.createAttribute("id");
console.dir(attrId);
attrId.value = "ident-for-section";
console.log(attrId);
section.setAttributeNode(attrId)

// dataset
console.log(section.dataset);
