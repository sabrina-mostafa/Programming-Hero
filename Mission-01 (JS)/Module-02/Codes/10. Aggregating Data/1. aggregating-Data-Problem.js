//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };



// ------------------------ Way-1(long) ------------------------

const finalOutput1 = sales.reduce((groupedTable, eachSalesObj) => {

  if (!groupedTable[eachSalesObj.category]) {

    groupedTable[eachSalesObj.category] = {
      totalRevenue: eachSalesObj.price * eachSalesObj.quantity,
      itemCount: eachSalesObj.quantity,
    };
  } 
  else {
    groupedTable[eachSalesObj.category] = {
      totalRevenue:
        groupedTable[eachSalesObj.category].totalRevenue + eachSalesObj.price * eachSalesObj.quantity,
      itemCount:
        groupedTable[eachSalesObj.category].itemCount + eachSalesObj.quantity,
    };
  }
  return groupedTable;
}, {});

console.log("Output1: ", finalOutput1);



// ------------------------ Way-2(clean) ------------------------

const finalOutput2 = sales.reduce((groupedTable, eachSalesObj) => {

    const {category, price, quantity} = eachSalesObj ;   // destructure

    if(!groupedTable[category]) {      // if this category doesn't exist
        groupedTable[category] = {
            totalRevenue: 0,
            itemCount: 0,
        }
    }

    groupedTable[category].totalRevenue += (price * quantity);
    groupedTable[category].itemCount += quantity;
    
    return groupedTable;

}, {});

console.log("Output2: ", finalOutput2);