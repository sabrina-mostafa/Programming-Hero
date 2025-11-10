
const outerCounterFunction = () => {
  let count = 0;

  const innerCounterFunction = (amount) => {
    count += amount;
    return count;
  };

  return innerCounterFunction;
};

const counter = outerCounterFunction();   // returns the reference of innerCounterFunction on counter

console.log(counter(2));
console.log(counter(3));
console.log(counter(4));