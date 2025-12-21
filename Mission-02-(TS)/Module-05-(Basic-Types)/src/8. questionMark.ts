// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining


// ---------------------- ternary operator ----------------------
const canVote = (age: number) => {
    age >= 18 ? console.log("Yes") : console.log("No");
}

canVote(55);
canVote(15);



// ---------------------- nullish coalescing operator ----------------------
const selectedTheme = (givenTheme: string | null | undefined): string => {
    const theme = givenTheme ?? "Dark Theme"
    return theme;
}

console.log(selectedTheme(null));
console.log(selectedTheme("Green Theme"));
console.log(selectedTheme(undefined));



// ---------------------- optional chaining ----------------------

const user: {
    address: {
        city?: string,
        zipCode: number,
    }
} = {
    address: {
        zipCode: 23234
    }
}
const chainingOutput = user?.address?.city;
const userCity = chainingOutput ?? "CTG";

console.log(chainingOutput);
console.log(userCity);