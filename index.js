"use strict";
// const dataProto ={
//     addFrom:function(){
//         this.users.forEach((user)=>{
// user.from = this.from;
//         })
//     }
// };ß

// const data = {
// error:null,
// from:'db',
// users:[
// {id:100,login: 'qwel', isMale:true},
// {id:200,login: 'qwel21', isMale:true},
// {id:101,login: 'asd', isMale:false},
// {id:178,login: 'sss', isMale:false},
// {id:10,login: 'max', isMale:true}
// ],
// __proto__: dataProto,
// };
// data.addFrom();
// console.table(data.users);

const site = {
  title: "my site",
  heading: ["About us", "Contacts", "News"],
  logHeadings: function () {
    this.heading.forEach((head)=> {
      console.log(head, "|", this.title);
    }, this);
  },
  logHead3: function () {
    this.heading.forEach(logHead3.bind(this));
  },
};

site.logHeadings();

const logHead3 = function (head, index) {
  console.log(index + 1, "|", this.title);
};
site.logHead3();



const logHead4 = function () {
    
}
