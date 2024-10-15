"use strict";

function loadImage(path = "", alt = "", w = 100, h = 100) {
  const img = new Image(w, h);
  img.src = path;
  img.alt = alt;
  return new Promise((resolve, reject) => {
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("path invalid"));
    });
  });
}

loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizr2lpFUzj3_hy1tkGmVCPJURWOo_IA059A&s')
.then((elem)=>{
document.getElementById('root').append(elem)    
})
.catch((error)=>console.log(error.message));
