// import { camalize } from "case-format-converter";

// camalize("manish wayangankar").then((res) => console.log(res));
// const wcf = require("case-format-converter");

// console.log(wcf("camel", "manish way123"));
const wcf = require("case-format-converter");

console.log(wcf.camelCase("aks 12 waur OP"));
console.log(wcf.snakeCase("aks 12 waur OP"));
