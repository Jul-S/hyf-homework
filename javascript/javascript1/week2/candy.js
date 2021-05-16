const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    switch(candyType) {
        case "sweet":
            boughtCandyPrices.push(weight * 0.5);
            break;
        case "chocolate":
            boughtCandyPrices.push(weight * 0.7);
            break;
        case "toffee":
            boughtCandyPrices.push(weight * 1.1);
            break;
        case "chewing-gum":
            boughtCandyPrices.push(weight * 0.03);
            break;
    }
}

let amountToSpend = Math.floor(Math.random() * 100);
console.log(`You can spend ${amountToSpend} on candies!`)
addCandy("sweet", 20);
canBuyMoreCandy();
addCandy("chocolate", 20);
canBuyMoreCandy();
addCandy("toffee", 30);
addCandy("chewing-gum", 100);
canBuyMoreCandy();
addCandy("sweet", 40);
canBuyMoreCandy();
addCandy("toffee", 20);
canBuyMoreCandy();



function canBuyMoreCandy() {
    let spentAmount = 0;

    for (let i = 0; i < boughtCandyPrices.length; i++) {
        spentAmount += boughtCandyPrices[i];
    }

    if (spentAmount < amountToSpend) {
        console.log(`You already spent ${spentAmount}. You can buy more, so please do!`);
    } else {
        console.log(`You already spent ${spentAmount}. Enough candy for you!`);
    }
}
