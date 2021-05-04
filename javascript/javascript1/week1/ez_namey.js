const firstWords = ["Easy", "Awesome", "Corporate", "Severe", "Smiling", 
    "Heavenly", "Childlike", "Shy", "Anxious", "Ugliest", "Accurate"];
const secondWords = ["World", "Ladder", "Exam", "Driver", "Organization",
    "Operation", "Sector", "Oven", "Atmosphere", "Product"];

const randomNumber = Math.floor(Math.random() * 10) + 0;

let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);