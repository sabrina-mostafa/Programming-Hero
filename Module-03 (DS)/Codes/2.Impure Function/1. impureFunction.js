let count = 5;

const counter = (amount) => {
  count = count + amount;
  return count;
};

// Generates different Outputs for Same Input
console.log(counter(2));
console.log(counter(2));
console.log(counter(2));
