import { a } from "./file1.mjs";
import {a as x} from "./file2.mjs";

import utils from "./utils_esm/index.mjs"

console.log(a, x);

console.log(utils.add(4, 5));
console.log(utils.subs(4, 5));

