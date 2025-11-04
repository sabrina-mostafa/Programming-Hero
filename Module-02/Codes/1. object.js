const obj = {
    sabrina : { age: 22 },
    "Sabrina Mostafa" : { height: "5ft 2.5inch" }
}

obj[true] = {age: 15};

console.log(obj);
console.log(obj.sabrina);
console.log(obj["Sabrina Mostafa"]);
console.log(obj.true);

