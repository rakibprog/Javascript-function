const products = [
    'dell driver updates',
    'penny dell sunday crossword',
    'dell drivers and downloads',
    'dell support number',
    'dell chat',
    'dell seton medical center',
    'dell docking station for laptop',
    'dell latitude 5410',
    'dell customer service number',
    'dell order status',
    'dell laptop docking station'
];

const searching = 'station';

// index of 
const output = [];
for (const product of products) {
    if (product.indexOf(searching) != -1) {
        output.push(product);
    }
}
console.log(output);

// includes

for (const product of products) {
    if (product.includes(searching)) {
        output.push(product);
    }
}

console.log(output);

// startsWith first index value

for (const product of products) {
    if (product.startsWith(searching)) {
        output.push(product);
    }
}
console.log(output);

// endsWith last index value
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);