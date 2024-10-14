"use strict";

 fetch("./users.json").then((response) => 
  response.json())
  .then((data) => {
data.forEach((user)=>{
    console.log(user.fName);
    
})
  }).catch(()=>{
    console.table(error);
  }).finally(()=>{
    console.table('finally')
  })

// promise.then().catch().finally()
