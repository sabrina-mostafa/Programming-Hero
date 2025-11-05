// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((totalSumOfPrice, eachItem) => {

  // printing each output
  console.log(totalSumOfPrice, eachItem);

  return (totalSumOfPrice =
    totalSumOfPrice + eachItem.price * eachItem.quantity);

}, 0);

console.log("\nTotal sum: ", subTotal);
