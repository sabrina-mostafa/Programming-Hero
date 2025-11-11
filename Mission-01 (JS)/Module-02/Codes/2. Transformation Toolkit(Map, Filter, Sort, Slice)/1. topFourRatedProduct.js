const rawApiData = [
  {
    id: 1,
    productName: "Wireless Headphones",
    category: "Electronics",
    price: 120,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    productName: "Running Shoes",
    category: "Sportswear",
    price: 75,
    rating: 4.2,
    inStock: false,
  },
  {
    id: 3,
    productName: "Coffee Maker",
    category: "Home Appliances",
    price: 99,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    productName: "Smart Watch",
    category: "Electronics",
    price: 149,
    rating: 4.3,
    inStock: true,
  },
  {
    id: 5,
    productName: "Desk Lamp",
    category: "Home Decor",
    price: 45,
    rating: 4.1,
    inStock: true,
  },
  {
    id: 6,
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 85,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 7,
    productName: "Yoga Mat",
    category: "Sportswear",
    price: 25,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 8,
    productName: "Water Bottle",
    category: "Accessories",
    price: 15,
    rating: 4.0,
    inStock: true,
  },
  {
    id: 9,
    productName: "Gaming Mouse",
    category: "Electronics",
    price: 60,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 10,
    productName: "Electric Kettle",
    category: "Home Appliances",
    price: 55,
    rating: 4.3,
    inStock: false,
  },
  {
    id: 11,
    productName: "Office Chair",
    category: "Furniture",
    price: 180,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 12,
    productName: "Table Fan",
    category: "Home Appliances",
    price: 40,
    rating: 4.1,
    inStock: true,
  },
  {
    id: 13,
    productName: "LED Monitor",
    category: "Electronics",
    price: 220,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 14,
    productName: "Fitness Tracker",
    category: "Electronics",
    price: 130,
    rating: 4.2,
    inStock: false,
  },
  {
    id: 15,
    productName: "Sneakers",
    category: "Sportswear",
    price: 95,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 16,
    productName: "Laptop Stand",
    category: "Accessories",
    price: 35,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 17,
    productName: "Microwave Oven",
    category: "Home Appliances",
    price: 250,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 18,
    productName: "Floor Lamp",
    category: "Home Decor",
    price: 80,
    rating: 4.3,
    inStock: true,
  },
  {
    id: 19,
    productName: "Wireless Keyboard",
    category: "Electronics",
    price: 70,
    rating: 4.4,
    inStock: false,
  },
  {
    id: 20,
    productName: "Backpack",
    category: "Accessories",
    price: 55,
    rating: 4.2,
    inStock: true,
  },
];

// ---------------- Filter Top 4 Electronics Data as {name : ProductName} ----------------

const topElectronicsProducts = rawApiData
  .filter((data) => {
    return data.category == "Electronics";
  })
  .sort((data1, data2) => data2.rating - data1.rating)
  .slice(0, 4)
  .map((data) => {
    return { name: data.productName };
  });

console.log(topElectronicsProducts);
