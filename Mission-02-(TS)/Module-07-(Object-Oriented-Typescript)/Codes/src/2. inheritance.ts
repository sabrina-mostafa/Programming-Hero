
// ---------------- Parent Class ----------------
class Person {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age:number) {
        this.id =  id;
        this.name = name;
        this.age =  age;
    }

    getSleep(sleepHours: number) {
        console.log(`${this.name} gets ${sleepHours} hours of sleep.`);
    }
}


// ---------------- Child-Class-01 ----------------
class Student extends Person {  // Inheritance
   // Empty because all properties and methods are common with Parent Class
   // behind the scene, typescript calls constructor and super also and sends all value to the parameters
}
const student1 = new Student(222, "Mr. X Student", 12);
console.log(student1);
student1.getSleep(7);


// ---------------- Child-Class-02 ----------------
class Teacher extends Person {  // Inheritance
    address: string;

    constructor(id: number, name: string, age:number, address: string) {
        super(id, name, age);
        this.address = address;
    }

    takeClass(classHours: number) {
        console.log(`${this.name} takes class for ${classHours} hours.`);
    }
}

const teacher1 = new Teacher(222, "Mr. Y Teacher", 32, "Dhaka");
console.log(teacher1);
teacher1.takeClass(10);
teacher1.getSleep(8);