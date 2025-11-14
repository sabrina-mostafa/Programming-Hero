
// Type Assertion

// Example-01
const kgToGmConverter = (input: string|number): string|number|undefined => {
    if(typeof input==="string") {
        const [value,] = input.split(" ");
        return `Converted Value is ${Number(value)*1000}`;
    }
    else if(typeof input==="number") {
        return input*1000;
    }
}

const result1 = kgToGmConverter(2) as number;   // Type Assertion
const result2 = kgToGmConverter("2") as string;   // Type Assertion
console.log({result1}, {result2});



// Example-02

type CatchErrorMsg = {
    message: string;
}

try{

}
catch(err){
    console.log((err as CatchErrorMsg).message);
}