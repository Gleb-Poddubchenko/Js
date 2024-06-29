'use strict';

const dataBD = '2000/03/12';

const arrDataBDUser = dataBD.split('/');


const now = new Date();
console.log(now.getFullYear());

const age = now.getFullYear() - Number(dataBD.split('/').at(0));
console.log(age);


