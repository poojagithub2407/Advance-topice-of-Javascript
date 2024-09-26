/*
    hoisting:hoisting is javascript mechanism 
    where variable and function declaration are moved
    to the top of scopd during complie phase,only function
    declaration is hoisted 
*/

/*
 hoisting for variable :
     -variable declare with 'var' keyword are hoisted and initalized with 'undefined'
     -variable declare with 'let' and 'const' keyword are hoisted but not initalized due to temporal dead zone
*/

/*
hoisting for function
 function declaration are fully hoisted ,meaning the entire function can be called before is declaration in the code
 function expression ,those assigned to 'var','let' and 'const' are not hoisted in same way only variable declaration
 is hoisted ,not the function itself


*/


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