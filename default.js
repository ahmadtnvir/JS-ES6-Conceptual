// !Default Value
const add = (x = 0, y = 0) => {
  return x + y;
};

console.log(add(3));

/------------------------------------------/;

// ! Destructuring in function parameter

const person = {
  name: "Tanvir",
  age: 28,
};

const personDetails = ({ name, age }) => {
  return `Name: ${name}, Age: ${age}`;
};

console.log(personDetails(person));
