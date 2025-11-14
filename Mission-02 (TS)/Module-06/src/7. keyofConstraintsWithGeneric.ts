
// --------------- keyof Operation - is applied on types only ---------------

type vehiclesOption = {
    car: string;
    bike: string;
    cng: string;
}

type myVehiclesO1 = "car" | "bike" | "cng";
type myVehiclesO2 = keyof vehiclesOption;

// both same
const myVehicles1: myVehiclesO1 = "car";
const myVehicles2: myVehiclesO2 = "car";


// -------------------- typeof Constraints --------------------

const user = {
    id: 233,
    name: "x",
    address: {
        city: "a",
    }
}
// object's value can be accessed in two ways:
// 1
const userId1 = user.id;
// 2
const userId2 = user["id"];
console.log(userId1, userId2);  // same output

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}


// ---------------- A function that will return the object property/value ----------------

// ----------------- for single object -----------------
const getPropertiesOfObject1 = (obj: User, key: keyof User) => {
    return obj[key];
}
console.log(getPropertiesOfObject1(user, "name"));


// ----------------- with generics -----------------
const student1 = {
    id: 772,
    name: "jkl"
}
const student2 = {
    age: 22,
    favoriteColor: "black"
}

const getPropertiesOfObject2 = <X> (obj: X, key: keyof X) => {
    return obj[key];
} 
console.log(getPropertiesOfObject2(student1, "id"));
console.log(getPropertiesOfObject2(student2, "favoriteColor"));
