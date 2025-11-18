

// ------------ a function that gives the passed value as array ------------

// normally
const arrayWithNumber = (value: number) => {
    return [value];
}
const arrayWithString = (value: string) => {
    return [value];
}
console.log(arrayWithNumber(222), arrayWithString("Sabrina"));

// using Generics
const arrayWithGenerics = <T> (value: T) => {
    return [value];
}
// const test = arrayWithGenerics(446) ;
// test.push(2);
console.log(arrayWithGenerics(446));
console.log(arrayWithGenerics("Sara"));




// ------------ a function that gives the passed values as tuple ------------

//normally
const createArrayWithTuple = (param1: number, param2: string) => {
    return [param1, param2];
}

// using Generics
const createArrayWithTupleGeneric = <X, Y> (param1: X, param2: Y) => {
    return [param1, param2];
}
console.log(createArrayWithTupleGeneric(2, 5));
console.log(createArrayWithTupleGeneric("2", "5"));
console.log(createArrayWithTupleGeneric("2", 5));




// ------------ a function to admit a student into a specific course ------------

const addStudentToCourse = <T> (studentInfo: T) => {
    return {
        course: "Course: X",
        ...studentInfo
    }
}

const student1 = {
    id: 23,
    name: "abc",
    age: 25,
}

const student2 = {
    id: 55,
    name: "xyz",
    age: 25,
    isMarried: true
}

console.log(addStudentToCourse(student1));
console.log(addStudentToCourse(student2));