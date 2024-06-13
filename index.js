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

function toKebabCase(str) {
  return (str == "") | (str == undefined)
    ? ""
    : str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .join("-")
        .toLowerCase();
}

function toTrainCase(str) {
  return (str == "") | (str == undefined)
    ? ""
    : str
        .split(/[\s-.,_]+/) // Split by spaces, hyphens, and underscores
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize the first letter
        .join("-"); // Join with hyphens
}

function toTitleCase(str) {
  return (str == "") | (str == undefined)
    ? ""
    : str
        .split(/\s+/) // Split by spaces
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize the first letter and lowercase the rest
        .join(" "); // Join with spaces
}
module.exports = {
  camelCase: toCamelCase,
  snakeCase: toSnakeCase,
  kebabCase: toKebabCase,
  trainCase: toTrainCase,
  titleCase: toTitleCase,
};
