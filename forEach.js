const array = [1, 2, 3];
array.forEach((element, index, arr) => {
    arr[index] = element * 2;
});
console.log(array); // [2, 4, 6]
