const wcf = require("case-format-converter");

console.log(wcf.camelCase("word case format to change string into camelcase"));
console.log(wcf.snakeCase("word case format to change string into snakecase"));
console.log(wcf.kebabCase("word case format to change string into kebabcase"));
console.log(wcf.trainCase("word case format to change string into traincase"));
console.log(wcf.titleCase("word case format to change string into titlecase"));
console.log(
  wcf.pascalCase("word case format to change string into pascalcase")
);
console.log(
  wcf.screamingSnakeCase(
    "word case format to change string into screming snakecase"
  )
);
