// global scope
// block scope
// local scope or functional scope

// !global scope
// * You can access it from every where.
const x = 10;

// console.log(x); // Output: 10

function outerFunction() {
  if (true) {
    return x;
  }
}
// console.log(outerFunction()); // Output: 10

// !block scope
// * Variable declared inside a block scope is not accessible outside of the block. But using var instead of let or const you can access the variable outside of the block.

{
  var z = 50;
  let y = 20;
  // console.log(y); // Output: 20
}
// console.log(y); // Output: ReferenceError: y is not defined
// console.log(z); // Output: 50

// !local scope or functional scope
// * Variable declared inside a function is only accessible within that function.
function localScope() {
  var q = 111;
  let w = 999;
  const u = 222;
  v = 777; // !not recommended
}
localScope();
// console.log(q, w, u); // Output: ReferenceError: q,w,u is not defined
// console.log(v); // Output: 777 // !not recommended
