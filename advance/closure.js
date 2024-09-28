const outerFunction = () => {
  let count = 0;
  const innerFunction = () => {
    count++;
    console.log(count);
  };
  return innerFunction;
};

const outer = outerFunction();
// console.log(typeof outer); // Output: function

outer();
outer();
outer();
outer();
outer();
