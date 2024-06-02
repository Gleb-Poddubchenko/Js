
function myArrayPrototype () {
this.push = function (value) {
   this[this.length] = value;
   this.length++;
   return this.length;
}; 
   this.pop= function(){
      if (this.length === 0) {
         return;
      }
      const lastItem = delete this[this.length-1];
   delete this[this.length-1];
   this.length--;
   return lastItem
   };
   
   this.forEach = function () {
   };
   
};

function MyArray(){
   this.length = 0;
};

MyArray.prototype =  new myArrayPrototype();

const myArrNums1 = new MyArray();
myArrNums1.push(9);
// myArrNums1.push(4);
// myArrNums1.push(5);
// myArrNums1.push(8);
// console.log(myArrNums1);
// myArrNums1.pop();
// myArrNums1.pop();
// myArrNums1.pop();
// myArrNums1.pop();
// myArrNums1.pop();
// console.log(myArrNums1);