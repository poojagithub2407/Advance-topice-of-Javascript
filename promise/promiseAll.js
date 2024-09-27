/*
promise.all() takes array of promsie and retuen single promise 
this retured promise reolve when all promise in array
have resolved 
when any promise is rejected then entrie promise.all() chain rejectd
with reason of first rejectd promise

*/



const promise1 = Promise.resolve(3);
const promis2 = new Promise((resolve) =>
     setTimeout(resolve, 100, 'foo')
);

const promise3 = new Promise((resolve, reject) =>
     setTimeout(resolve
          , 500, 'bar'));

Promise.all([promise1,promis2,promise3])
.then((value)=>{
     console.log(value);
})
.catch((error)=>{
     console.error('one of the promises rejectd',error);
})