const numbers = [1, 2, 3, 4, 5, 6];
const newArray=numbers.filter(num=>num%2===0);
console.log('fiter array',newArray);


const words = ['apple', 'banana', 'cherry', 'date'];

const filterString=words.filter(word=>word.length>5);
console.log(filterString);



const peoples = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 35 }
 ];

 const youngPeople=peoples.filter(people=>people.age<30);
 console.log(youngPeople);