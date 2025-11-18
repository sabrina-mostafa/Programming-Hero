// Problem 3:
// Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

// Requirements:
// You must use a constructor to initialize the properties.
// The getDetails method should return a string in the format: "Name: [name], Age: [age]".
// Sample Input:
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
// Sample Output:
// 'Name: John Doe, Age: 30';
// 'Name: Alice, Age: 25';
// --------------------------------------------------------------------------------------------------


// -------------------------------------------- Solution --------------------------------------------

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());