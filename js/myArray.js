'use strict';

function User(fname,lname,age){
this.fname = fname;
this.lname = lname;
this.age = age;
}

function Userproto(){
    this.getFullName = function(){
        return `${this.fname} ${this.lname}`;
    }
}

User.prototype = new Userproto();

const user1 = new User('Tom','Rot',45)







































