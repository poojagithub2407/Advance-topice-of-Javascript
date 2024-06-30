//remove element 
let array1 = [1, 2, 3, 4, 5];
let removed = array1.splice(1, 2);
console.log('removed element:', removed);
console.log('new array', array1);

//replace element

let  array2=[1,2,3,5,6];
array2.splice(1,1,'a','b');
console.log('new array:',array2);

//adding element without removing

let array3=[1,2,3,4,5];
array3.splice(3,0,'c','d','e','f');
console.log(array3);