const getFullName = function(){ 
   return `${this.fname} ${this.sname}`;
}
const getInfo= function () {` ${this.sname} years old ${this.age}`; 
}
const userFunc ={
   getFullName: function(){ 
      return `${this.fname} ${this.sname}`;
   },
   getInfo: function () {` ${this.sname} years old ${this.age}`; 
   },
};

const user1 = {
   fname: 'Brad',
   sname: 'Pitt',
   age:44,
};
user1._proto_ = userFunc;

const user2 = {
   fname: 'Tom',
   sname: 'Rott',
   age: 34,
_proto_ :userFunc,
};

function User (fname,sname,age){
   this.fname = fname;
   this.sname = sname;
   this.age = age;
}

function UserPrototype(){

   this.getFullName = function(){
      return`${this.fname} ${this.sname}`;
   }
   this.getInfo= function () {
      return` ${this.sname} years old ${this.age}`; 
   }
}

User.prototype = new UserPrototype();

const user3 = new User ( 'Anna','Zeferino',23);