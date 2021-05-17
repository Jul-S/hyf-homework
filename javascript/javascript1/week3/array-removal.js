const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
if (names.includes(nameToRemove)) {
  const position = names.indexOf(nameToRemove);
  names.splice(position, 1)
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']