// !CallByValue
let x = 5;

const modify = (a) => {
  a = a + 2;
  return a;
};

console.log(modify(x)); // Output: 7
console.log(x); // Output: 5

// !CallByReference
let y = [1, 2, 3];

const modifyArr = (b) => {
  b.push(4);
  return b;
};

console.log(modifyArr(y)); // Output: [ 1, 2, 3, 4 ]
console.log(y); // Output: [ 1, 2, 3, 4 ]
