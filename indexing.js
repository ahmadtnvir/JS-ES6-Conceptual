const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const num = numbers.map((item, index, arr) =>
  console.log(`Item ${item}, Index ${index}, Array ${arr}`)
);
