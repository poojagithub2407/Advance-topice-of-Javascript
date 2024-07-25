const numbers = [4, 9, 16, 25];
const result = numbers.find(num => num > 10);
console.log(result); // 16


const people = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 35 }
];
const person = people.find(person => person.name === 'Bob');
console.log(person); // { name: 'Bob', age: 30 }



const words = ['apple', 'banana', 'cherry'];
const firstWithA = words.find(word => word.startsWith('a'));
console.log(firstWithA); // 'apple'
