// function wcf(type, str) {
//   let result;
//   switch (type) {
//     case "camel":
//       result = str
//         .toLowerCase()
//         .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
//       break;
//     case "snake":
//       break;
//   }
//   return result;
// }
// module.exports = wcf;

// // console.log(camalize("akshay Wayangankar"));

function toCamelCase(str) {
  return (str == "") | (str == undefined)
    ? ""
    : str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function toSnakeCase(str) {
  return (str == "") | (str == undefined)
    ? ""
    : str
        .replace(/\s+/g, "_") // Replace spaces with underscores
        .replace(/[^\w\s]/gi, "") // Remove special characters
        .toLowerCase(); // Convert to lowercase
}
module.exports = {
  camelCase: toCamelCase,
  snakeCase: toSnakeCase,
};
