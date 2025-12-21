// Problem 4:
// Create a function filterByRating that accepts an array of items, where each item has the following properties:

// title (string)
// rating (number between 0 and 5)
// The function should return a new array containing only the items with a rating of 4 or more.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.
// Sample Input:
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));
// Sample Output:
// [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book C', rating: 5.0 },
// ];
// --------------------------------------------------------------------------------------------------


// -------------------------------------------- Solution --------------------------------------------

type Item = {
    title: string;
    rating: number;
}

const filterByRating = (input: Item[]): Item[] => {

    const newArray = input.filter((eachElement) => {
        if (eachElement.rating < 0 || eachElement.rating > 5) { eachElement.rating = 0; }

        return eachElement.rating >= 4;
    });
    return newArray;
}

const books = [
    { title: 'Book A', rating: 9.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
    { title: 'Book D', rating: 4.0 },
    { title: 'Book E', rating: 1.99 },
    { title: 'Book E', rating: 4.99 },
    { title: 'Book F', rating: -4.9 },
];

console.log(filterByRating(books));