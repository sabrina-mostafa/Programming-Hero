
// ------------------ nullable -----------------
const getData = (data: string | null) => {
    if (data)
        console.log(data);
    else console.log("All data");
}

getData("data1");
getData(null);


// ------------------ unknown -----------------
const getDiscountedPrice = (input: unknown) => {
    let discountedPrice = 0.1;
    if( typeof input === "number") {
        discountedPrice = discountedPrice*input;
        console.log(discountedPrice)
    }
    else if( typeof input === "string") {
        const [firstIndexValue] = input.split(" ");
        console.log("test:", Number(firstIndexValue));

        discountedPrice = discountedPrice*Number(firstIndexValue);
        console.log(discountedPrice);
    }
    else {
        console.log("Wrong Input");
    }
}

getDiscountedPrice(100);
getDiscountedPrice("100 TK");
getDiscountedPrice("");
getDiscountedPrice(null);



// ------------------ never -----------------
const throwError = (msg: string): never => {
    throw Error(msg);
}

throwError("Error msg....");