"use strict";
function recursia() {
  recursia();
}


function powRecursion (number=2,exp=2){
  if(exp===0){
    return 1;
  }
  return number * powRecursion(number, exp-1);
}
console.log(powRecursion(3,5));


function powRecursion2 (number = 0){
if(number===0){
  return 1;
}
return number * powRecursion2(number-1);
}
console.log(powRecursion2(2));



