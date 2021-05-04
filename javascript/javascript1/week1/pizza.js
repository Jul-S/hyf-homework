
const favPizza = "Margarita";
const pizzaPrice = 52;

let amountOfPizza = 2;

// 1st Case its not a family pizza
let familySize = false;
let totalPrice = pizzaPrice * amountOfPizza;
console.log(`New pizza order: ${amountOfPizza} ${favPizza}. The price of the pizza is: ${totalPrice}`);

// 2nd case it`s a family pizza
familySize = true; 
totalPrice *= 2;
console.log(`New pizza order: ${amountOfPizza} family ${favPizza}. The price of the pizza is: ${totalPrice}`);
