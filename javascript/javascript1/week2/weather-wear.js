function getClothesToWear(temp) {
    if (temp < -20 || temp > 40) {
        return "Do not go outside! You will not survive there!"
    } else if (temp <= 0) {
        return "Wear warm wool thermo, snowsuit, hat, scarf, winter boots"
    } else if (temp < 10) {
        return "Wear warm wool thermo, winter jacket, hat, scarf, winter boots"
    } else if (temp < 15) {
        return "Wear shirt, pants, jacket, snickers"
    } else if (temp < 30) {
        return "Wear t-shirt, shorts, snickers"
    } else if (temp > 30 && temp < 40) {
        return "Wear swimsuit"
    }
}

const clothesToWear1 = getClothesToWear(18);
const clothesToWear2 = getClothesToWear(0);
const clothesToWear3 = getClothesToWear(-30);
const clothesToWear4 = getClothesToWear(8);
const clothesToWear5 = getClothesToWear(-5);
const clothesToWear6 = getClothesToWear(30);

console.log(clothesToWear1);
console.log(clothesToWear2);
console.log(clothesToWear3);
console.log(clothesToWear4);
console.log(clothesToWear5);
console.log(clothesToWear6);