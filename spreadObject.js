// !Spread Operator
const person = {
  name: "John Doe",
  age: 30,
  address: "Bari Ni",
  land: {
    city: "Bari",
    country: "Italy",
    carsName: ["Toyota", "Suzuki"],
  },
  p: [1, 2, 3, 4],
  investMent: 10000,
  office: "M",
};
// { name: 'John Doe', age: 30, address: 'Bari Ni', phone: '01704410851' }
const person2 = { ...person };
// {
//     name: 'John Doe',
//     age: 30,
//     address: 'Bari Ni',
//     email: 'tnvir9@gmail.com'
// }

person.phone = "01704410851";
person2.email = "tnvir9@gmail.com";

// console.log(person);
// console.log(person2);

// !Destructuring
const {
  name: myName,
  age,
  address,
  phone,
  land: { city, country },
  land: {
    carsName: [a],
  },
  p: [first, second],
} = person;
console.log(myName, age, address, phone, city, country, first, second, a);

// !Rest Operator

const { investMent, office, ...remaining } = person;
console.log(investMent, office, remaining);
