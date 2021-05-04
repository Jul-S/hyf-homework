const dogYearOfBirth = 2017;
const dogYearFuture = 2027;

let dogYear = dogYearFuture - dogYearOfBirth;

// 1st case showing in human years
let shouldShowResultInDogYears = false;
console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);

// 2nd case showing in dog years
shouldShowResultInDogYears = true;
dogYear *= 7;
console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
