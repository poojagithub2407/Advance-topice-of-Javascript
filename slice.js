const numbers=[10,20,30,40,50,60];
const num=numbers.slice(1,4);
console.log('new sub array is',num);


const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const subFruits=fruits.slice(3);
console.log('subFruits',subFruits);


//using negative index and single index

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
 const subColor=colors.slice(-3);
 console.log('subcolor using negative index',subColor);

 //using negative indices

 const animals = ['lion', 'tiger', 'bear', 'wolf', 'fox'];
 const subAnimal=animals.slice(-4,-2);
 console.log('sub animals are',subAnimal);
