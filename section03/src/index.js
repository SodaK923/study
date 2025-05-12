//console.log("안녕! node!");

// const moduleData=require("./math");

// console.log(moduleData.add(10,30));
// console.log(moduleData.sub(10,30));

import {add, sub} from "./math.js";
import multiply from "./math.js";
import randomColor from "randomcolor";
console.log(add(1,4));
console.log(sub(1,4));
console.log(multiply(1,4));

const color=randomColor();
console.log(color);

