const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
  contact: {
    phone: "123",
    email: "johndoe@example.com",
  },
  education: {
    schoolName: "PH",
    subjects: [
      { name: "Benglai", mark: 45 },
      { name: "mathematics", mark: 80 },
      { name: "english", mark: 90 },
    ],
  },
};

console.log(person.education.subjects[2].name);
