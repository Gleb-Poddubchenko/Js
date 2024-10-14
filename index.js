"use strict";

const user = {
  fName: "Brad",
  lName: "Pitt",
  age: 60,
  getFullName() {
    return this.fName + " " + this.lName;
  },
  isMale: true,
  hasPet: undefined,
  ukrainianPasport: null,
  [Symbol("symbol")]: "symbol",
  children: ["Alex", "Anna", "Max"],
  adress: {
    town: "NY",
    house: 123,
  },
};

console.log(user);

const serialiseUser = JSON.stringify(user);
console.log(serialiseUser);

 
const deSerialiseUser = JSON.parse(serialiseUser);

console.log(deSerialiseUser);
