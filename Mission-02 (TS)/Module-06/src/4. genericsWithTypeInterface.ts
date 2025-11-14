
interface IDeveloper <T, X=null> {
    id: number,
    name: string,
    smartWatch: T,
    bike?: X
}
interface ISmartWatch1 {
    heartRate: number,
    calculator: boolean
}
interface IBike {
    brand: string,
    engineCapacity: number
}


const developer1: IDeveloper<ISmartWatch1, IBike> = {
    id: 123,
    name: "Mr. X",
    smartWatch: {
        heartRate: 223,
        calculator: true
    },
    bike: {
        brand: "xyz",
        engineCapacity: 233
    }
}
console.log(developer1);

const developer2: IDeveloper<ISmartWatch1> = {
    id: 567,
    name: "Mr. Y",
    smartWatch: {
        heartRate: 345,
        calculator: false
    },
    bike: null  // we can set the value null or even can ignore this property
}
console.log(developer2);



// ---------------- Simple Example to Compare -----------------

const add = (num1: number, num2: number = 0): number => num1+num2;  // setting default value, same is done in optional generic type

console.log(add(1, 2));
console.log(add(2));