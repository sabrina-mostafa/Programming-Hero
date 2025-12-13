
// ---------------- Class without Parameter Properties ------------------
class Animal1 {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`This ${this.name} is making sound: ${this.sound}`);
    }
}

// ---------------- Class with Parameter Properties -------------------
class Animal2 {

    constructor(public name: string, public species: string, public sound: string) {

    }
    makeSound() {
        console.log(`This ${this.name} is making sound: ${this.sound}`);
    }
}


const animal1 = new Animal1("Dog", "Dog bread", "Ghew Ghew");
const animal2 = new Animal1("Cat", "Cat bread", "Meow Meow");

console.log(animal1, animal2);
console.log(animal2.sound);
animal2.makeSound();


const animal3 = new Animal2("Parrot", "Parrot bread", "Kuhu Kuhu");
console.log(animal3);
animal3.makeSound();
