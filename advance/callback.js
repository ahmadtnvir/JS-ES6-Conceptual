// function show() {
//   return "tanvir ahmad";
// }

const show = () => console.log("My name is Tanvir Ahmad");
function fun1(age, callback) {
  console.log(`I am ${age} years old`);
  callback();
}

// fun1(28, show);

const add = (a, b) => console.log(a + b);
// add(5, 5);

const calculate = (x, y, callback) => {
  console.log("Hello");
  setTimeout(() => {
    callback(x, y);
  }, 2000);
  //   callback(x, y);
};
calculate(5, 5, add);
