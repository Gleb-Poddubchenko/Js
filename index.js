"use strict";

const number = 77;

const numberPromise = Promise.resolve(number);

const handlerPromise =(promise)=>{
    return promise.then((data)=>{console.log(data);
    })
}

handlerPromise(numberPromise)