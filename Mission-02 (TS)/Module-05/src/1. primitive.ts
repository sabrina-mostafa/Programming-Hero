
// ----- same type as Javascript (JS - TS) -----
// number, string, boolean, null, undefined

// ----- only TS type -----
// never, unknown, void



let nameX = undefined;  // when we don't declare the type undefined explicitly then we can assign any value
nameX = 3;

let nameY : undefined = undefined;  // when we explicitly declare the type undefined we can not assign any other value
nameY = undefined;  

console.log(nameX, nameY);