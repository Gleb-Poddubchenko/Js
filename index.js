"use strict";

const button = document.getElementById('unique')

unique.addEventListener('click', handlerClick)

function handlerClick(){
  console.log('hsndlerClick')
  unique.removeEventListener('click',handlerClick)
  unique.disabled = true
}


const objMouseClickEvent = new MouseEvent('click')

unique.dispatchEvent(objMouseClickEvent)