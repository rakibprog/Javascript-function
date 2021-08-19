// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The try and catch keywords come in pairs:
const name = 'rocky';
try {
    name = 'fatema';
} catch (error) {
    console.log(error);
}

console.log('hello');