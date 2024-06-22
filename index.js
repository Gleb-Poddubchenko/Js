"use strict";

const sum1 = function (number1, ...rest) {
  Array.from(arguments).reduce((summa, elem) => summa + elem);
};

const sumNumbers2 = (num1, ...rest) => rest.reduce((summa, elem) => summa + elem);
// собирает в массив все что не имеет своего имени
const result2 = sumNumbers2(1, 2, 3);
const result1 = sumNumbers2(1, 2, 3);


const arrNums = [5,7,9];
console.log(arrNums);
console.log([0],[1],[2]);
console.log(...arrNums); 
// srped  разбирает массив на элементы

console.log(Math.max (Math.max(7,3,45)));
console.log(Math.max(...arrNums));

