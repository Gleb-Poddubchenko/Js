"use strict";

const promise = fetch("./users.json");
console.log(promise);

promise.then((response) => {
  console.log("ok", response);
  const dataPromise = response.json();
  dataPromise.then((data) => {
    console.table(data);
  })
},
  ()=>{
    console.log(error);
  }
);

// promise.then().catch().finally()
