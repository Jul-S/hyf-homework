//Peter`s case:
let width = 8;
let depth = 10;
let height = 10;
let gardenSizeInM2 = 100;
let paidPrice = 2_500_000;

//First we calculte house volume:
let volumeInMeters = depth * height * width;
// then use it in house price formula:
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//adding extra assignment variable
let shouldBuyTheHouse = false;
if (housePrice >= paidPrice) {
    shouldBuyTheHouse = true;
}

console.log(`Peter's house price should be ${housePrice}, and he paid ${paidPrice}. 
Peter should buy the house: ${shouldBuyTheHouse}`);

//Julia`s case:
width = 5;
depth = 15;
height = 8;
gardenSizeInM2 = 70;
paidPrice = 1_000_000;

//First we calculte house volume:
volumeInMeters = depth * height * width;
// then use it in house price formula:
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
//adding extra assignment variable
shouldBuyTheHouse = false;
if (housePrice >= paidPrice) {
    shouldBuyTheHouse = true;
}

console.log(`Julia's house price should be ${housePrice}, and she paid ${paidPrice}.
Julia should buy the house: ${shouldBuyTheHouse}`);



