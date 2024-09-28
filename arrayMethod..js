const numbers = [1, 2, 3, 4, 5];

// !map
let total = 0;
const map = numbers.map((item) => (total += item));
console.log(total);

// !forEach
numbers.forEach((item) => console.log(item));

// !filter
const filter = numbers.filter((item) => item > 3);
console.log(filter);

// !find
const find = numbers.find((item) => item > 3);
console.log(find);

// !reduce
const reduce = numbers.reduce((acc, item) => acc + item, 0);
console.log(reduce);
