const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10



//Finding the Maximum Value:

const number = [1, 3, 5, 2, 4];
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(max); // 5


//Counting Occurrences of Values:

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});
console.log(count); // { apple: 2, banana: 2, orange: 1 }

