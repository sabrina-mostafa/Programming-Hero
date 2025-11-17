
// -------------------------- Instanceof Guard --------------------------

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getSleep(sleepHours: number) {
        return console.log(`${this.name} gets ${sleepHours} hours of sleep.`);
    } 
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }
    doStudy(studyHours: number) {
        return console.log(`${this.name} studies for ${studyHours} hours.`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    takesClass(classHours: number) {
        return console.log(`${this.name} takes class for ${classHours} hours.`);
    }
}

// -------------------------- way-01 --------------------------
const getUserInfo1 = (user: Person) => {
    if(user instanceof Student) {
        user.doStudy(10); 
    }
    else if(user instanceof Teacher) {
        user.takesClass(4);
    }
    else {
        user.getSleep(7);
    }
}
const student1 = new Student("Mr. X Student");
const teacher1 = new Teacher("Mr. Y Teacher");
const person1 = new Person("Mr. Z Person");

getUserInfo1(student1);
getUserInfo1(teacher1);
getUserInfo1(person1);

// --------------------- way-02(With Function Guard) ---------------------

const isStudent = (user: Person) => {
    return user instanceof Student;
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo2 = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(8); 
    }
    else if(isTeacher(user)) {
        user.takesClass(12);
    }
    else {
        user.getSleep(8);
    }
}
const student2 = new Student("Mr. A Student");
const teacher2 = new Teacher("Mr. B Teacher");
const person2 = new Person("Mr. C Person");

getUserInfo2(student2);
getUserInfo2(teacher2);
getUserInfo2(person2);