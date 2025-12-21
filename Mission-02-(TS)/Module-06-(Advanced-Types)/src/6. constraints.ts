
// constraints - strictly follow the types

type StudentMustHaveInfo = {
    id: number;
    name: string;
    age: number
}

const addStudentToCourse = <T extends StudentMustHaveInfo>(studentInfo: T) => {   // StudentMustHaveInfo fulfills the constraints i.e all students must have id, name, age
    return {
        course: "Course X",
        ...studentInfo,
    }
}

const studentInfo1 = {
    id: 1,    // must have
    name: "x",   // must have
    age: 23,  // must have
    hasPen: true,
}
const studentInfo2 = {
    id: 2,    // must have
    name: "y",   // must have
    age: 13,   // must have
    hasCar: true,
}
const studentInfo3 = {
    id: 3,      // must have
    age: 33,    // must have
    name: "y",    // must have
    hasCar: false,
    isMarried: false,
}
console.log(addStudentToCourse(studentInfo1));
console.log(addStudentToCourse(studentInfo2));
console.log(addStudentToCourse(studentInfo3));