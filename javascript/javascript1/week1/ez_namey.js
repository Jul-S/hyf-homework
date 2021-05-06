const firstWords = ["Easy", "Awesome", "Corporate", "Severe", "Smiling",
    "Heavenly", "Childlike", "Shy", "Anxious", "Ugliest", "Accurate"];
const secondWords = ["World", "Ladder", "Exam", "Driver", "Organization",
    "Operation", "Sector", "Oven", "Atmosphere", "Product"];

//making the random number generator depend on the length of longer array
const firstRandomNumber = Math.floor(Math.random() * firstWords.length);
const secondRandomNumber = Math.floor(Math.random() * secondWords.length);

let startupName = firstWords[firstRandomNumber] + " " + secondWords[secondRandomNumber];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);