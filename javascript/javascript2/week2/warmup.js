let numbers = [1, 2, 3, 4];
let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers[i] = numbers[i] * 2;
//   }
// }
//Rewrite the above program using map and filter don't forget to use arrow functions.

newNumbers = numbers.filter(x => x % 2 !== 0).map(x => x *= 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]