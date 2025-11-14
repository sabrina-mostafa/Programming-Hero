// Dynamically Generalize : Generics


type GenericArray<T> = Array<T>   // Generic type define

// ------------------------- Array -------------------------
const isEligible: GenericArray<boolean> = [true, false, true];
console.log(isEligible);

// all 3 same
const friends1: string[] = ["x", "y", "z"];
const friends2: Array<string> = ["x", "y", "z"];
const friends3: GenericArray<string> = ["x", "y", "z"];

console.log(friends1, friends2, friends3);

// all 3 same
const idList1: number[] = [1, 2, 3];
const idList2: Array<number> = [1, 2, 3];
const idList3: GenericArray<number> = [1, 2, 3];

console.log(idList1, idList2, idList3);



// ------------------------- Tuple: -------------------------
type CoArray = [number, string];   // type alias
type GenericCoArray<X,Y> = [X, Y];  // generics

const coordinates0: CoArray = [2, "5"];
const coordinates1: GenericCoArray<number, number> = [22, 34];
const coordinates2: GenericCoArray<string, string> = ["222", "344"];

console.log(coordinates0, coordinates1, coordinates2);



// ------------------------- Array of Object -------------------------
type genericUser<T> = Array<T>;
type User = {
    name: string, id: number
}

// const user: genericUser<{name: string, id: number}> = [
const user: genericUser<User> = [  // => type alias just to make code more clean
    {
        id: 12,
        name: "x"
    },
    {
        id: 52,
        name: "y"
    }
]

console.log(user);