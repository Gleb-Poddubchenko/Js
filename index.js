
console.log(window.document);
console.dir(window.document);
console.dir(window.document.body);
console.dir(window.document.body.children[0]);
const h1 = window.document.body.children[0];
console.log(h1);
function handlerClickH1(){
    console.log('click on h1')
}
h1.addEventListener('click',handlerClickH1);

h1.onclick = function () {
    console.log('onklick')
}