
const favPizza = "Margarita";
const pizzaPrice = 52;

let amountOfPizza = 2;
let familySize = false;
let totalPrice = pizzaPrice * amountOfPizza;

if (familySize) {
    totalPrice *= 2;
    console.log(`New pizza order: ${amountOfPizza} family ${favPizza}. The price of the pizza is: ${totalPrice}`);
} else {
    console.log(`New pizza order: ${amountOfPizza} ${favPizza}. The price of the pizza is: ${totalPrice}`);
}


