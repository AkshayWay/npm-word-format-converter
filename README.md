# npm-word-format-converter

npm package to change word format

This is Node.js based library. It is providing word formating like camel case, snacke case etc.,

# Installation

```shell
npm i case-format-converter

```

In Node.js:

```js
var cfc = require("case-format-converter");
//camelcase
console.log(wcf.camelCase("word case format to change string into camelcase"));
//wordCaseFormatToChangeStringIntoCamelcase

//snakecase
console.log(wcf.snakeCase("word case format to change string into snakecase"));
//word_case_format_to_change_string_into_snakecase

//kebabcase
console.log(wcf.kebabCase("word case format to change string into kebabcase"));
//word-case-format-to-change-string-into-kebabcase

//traincase
console.log(wcf.trainCase("word case format to change string into traincase"));
//Word-Case-Format-To-Change-String-Into-Traincase

//titlecase
console.log(wcf.titleCase("word case format to change string into titlecase"));
//Word Case Format To Change String Into Titlecase

//pascalcase
console.log(
  wcf.pascalCase("word case format to change string into pascalcase")
);
//WordCaseFormatToChangeStringIntoPascalcase

//screming snakecase
console.log(
  wcf.screamingSnakeCase(
    "word case format to change string into screming snakecase"
  )
);
//WORD_CASE_FORMAT_TO_CHANGE_STRING_INTO_SCREMING_SNAKECASE
```
