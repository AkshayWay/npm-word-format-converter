// import { camalize } from "case-format-converter";

// camalize("manish wayangankar").then((res) => console.log(res));
// const wcf = require("case-format-converter");

// console.log(wcf("camel", "manish way123"));
const wcf = require("case-format-converter");

console.log(wcf.camelCase("test case format converter library. test case 1"));
console.log(wcf.snakeCase("test case format converter library. test case 2"));
