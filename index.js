"use strict";

const number = 12321;

const numstring = number.toString();

const arrnum = numstring.split("");

const summa = arrnum.reduce((acc, item) => acc + Number(item), 0);

const sumDigitsOfNumber = (number = 0) =>
  number
    .toString()
    .split('')
    .reduce((sum, item) => sum + Number(item), 0);

console.log(sumDigitsOfNumber(11012));
