const wcf = require("case-format-converter");

console.log(wcf.camelCase("test case format converter library. test case 1"));
console.log(wcf.snakeCase("test case format converter library. test case 2"));
console.log(wcf.kebabCase("test case format converter library. test case 3"));
console.log(
  wcf.trainCase("test case format converter library. , _ test case 4")
);
console.log(
  wcf.titleCase("test case format converter library. , _ test case 5")
);
