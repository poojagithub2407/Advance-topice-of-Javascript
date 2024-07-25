//removing element

const array=[1,2,3,4,5,6];
const removed=array.splice(2,2);
console.log('removed elememt:',removed);
console.log('array elemnt:' ,array);

//Adding element

const array2=[23,34,56,57];
array2.splice(2,0,'x','y');
console.log('array2 is',array2);


//replacing element

const array3=[12,23,45,67];
array3.splice(1,2,'x','y');
console.log(array3);