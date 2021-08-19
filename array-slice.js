// slice 
// The slice() method returns selected elements in an array, as a new array.
// slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// slice() does not change the original array.
const numbers = [1, 2, 54, 66, 75, 22, 88, 45];
const numberSlice = numbers.slice(1, 3);
console.log(numberSlice);
console.log(numbers);

//splice()
// The splice() method adds and/or removes array elements.
const numbers = [2, 3, 7, 3, 8, 3];
const numberSplice = numbers.splice(2, 2, 100, 200);
console.log(numberSplice);
console.log(numbers);