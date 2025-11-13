
// --------------- Type Alias ---------------

// in Object
type User = {
    id: number;
    name: {
    firstName: string;
    lastName: string;
  };
  gender: "male"|"female";
  address: {
    division: string;
    city: string;
  }
};


const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};



// in function
type AddFunction = (num1:number, num2:number) => number

const add: AddFunction = (num1, num2) => num1+num2;

console.log(add(1, 2));