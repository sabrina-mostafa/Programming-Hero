
// polymorphism - Bohurupi

// ---------------------------- Example-01 -----------------------------
class Person {
    getSleep() {
        console.log("I am a normal happy person and I sleep for 10 hrs");
    }
}

class Student extends Person {
    getSleep() {
        console.log("I am a normal happy person and I sleep for 8 hrs");
    }
}

class NextDeveloper extends Person {
    getSleep() {
        console.log("I am a normal happy person and I sleep for 6 hrs");
    }
}

const getSleepingHours = (params: Person) => {
    return params.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextDeveloper();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);


// ---------------------------- Example-02 -----------------------------
class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const getArea = (params: Shape) => {
    console.log(params.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(10, 50);

getArea(shape1);
getArea(shape2);
getArea(shape3);