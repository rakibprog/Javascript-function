// The sort() method sorts the elements of an array.
//sort  string 
const alphabet = ['a', 'h', 'b', 'e', 'g', 'j'];
const alphabetSort = alphabet.sort();
console.log(alphabetSort);

//sort reverse way 
const alphabet = ['a', 'h', 'b', 'e', 'g', 'j'];
const alphabetSort = alphabet.sort().reverse();
console.log(alphabetSort);

// sort numbers different way

const numbers = [1, 3, 20, 55, 66, 77, 22, 12];
const sortNumbers = numbers.sort(function(a, b) { return a - b });
console.log(sortNumbers);

//sort reverse way 
const numbers = [1, 3, 20, 55, 66, 77, 22, 12];
const sortNumbers = numbers.sort(function(a, b) { return b - a });
console.log(sortNumbers);