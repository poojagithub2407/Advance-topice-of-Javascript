
console.log('value of a is ', a);   //undefined
var a = 10;
console.log('value of a is ', a);

console.log('value of b is', b);  //ReferenceError: Cannot access 'b' before initialization
const b = 10;
console.log('value of b is', b);

console.log('value of c is ', c);  //Cannot access 'c' before initialization
let c = 20;
console.log('value of c is ', c);


foo()
function foo() {
     console.log('function is hoisted');
}

bar();    // Cannot access 'bar' before initialization
const bar = function () {
     console.log('function expression is not hoisted');
}