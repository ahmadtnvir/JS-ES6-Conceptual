// !Spread Operator
const number = [2, 4, 6];
const number2 = [...number];

number.push(8);
number2.push(10);

// console.log(number);
// console.log(number2);
// [ 2, 4, 6, 8 ]
// [ 2, 4, 6, 10 ]

// !Destructuring & Rest Operator
const nums = [1, 2, 3, 4, 5, 6];
// const [a, b, c, d] = nums;
// 1 2 3 4
const [a, b, c, ...d] = nums;
// 1 2 3 [ 4, 5, 6 ]
// console.log(a, b, c, d);