"use strict";

const user = {
  public1: 44,
  privatInfo: {
    id: 14,
    login: "Brad",
    email: "bradgmail.com",
    bd: {
      year: 1963,
      month: 12,
      day: 18,
    },
  },
  contactInfo: {
    adress: {
      town: "NY",
      street: "15 avenu",
      house: 547,
    },
    phone: "123-56-85",
  },
  generalInfo: {
    profession: "actor",
    children: ["Fred", "Anna", "Max", "Alex"],
  },
};

console.log(user.privatInfo.login, user.contactInfo.phone);

//destrur

const {
contactInfo:{phone: userPhone,adress:{street}},
generalInfo:{children:[,,thirdChild]}
} = user;

console.log(userPhone);
// console.log(children);
console.log(street);
console.log(thirdChild);
