const numbers = [1, 2, 3, 4];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true


const numbers1 = [2, 4, 6, 8];
const allEven = numbers1.every(num => num % 2 === 0);
console.log(allEven); // true



const numbers3 = [-1, 2, 3, -4];
const hasPositive = numbers3.some(num => num > 0);
console.log(hasPositive); // true

const numbers4 = [1, 3, 5, 6];
const hasEven = numbers4.some(num => num % 2 === 0);
console.log(hasEven); // true
