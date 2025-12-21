"use strict";
// ----- same type as Javascript (JS - TS) -----
// number, string, boolean, null, undefined
Object.defineProperty(exports, "__esModule", { value: true });
// ----- only TS type -----
// never, unknown, void
let nameX = undefined; // when we don't declare the type undefined explicitly then we can assign any value
nameX = 3;
let nameY = undefined; // when we explicitly declare the type undefined we can assign any other value
nameY = undefined;
console.log(nameX);
//# sourceMappingURL=1.%20primitive.js.map