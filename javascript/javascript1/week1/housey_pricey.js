//Peter`s case:
let width = 8;
let depth = 10;
let heght = 10;
let gardenSizeInM2 = 100;
let paidPrice = 2_500_000;

//First we calculte house volume:
let volumeInMeters = depth * heght * width;
// then use it in house price formula:
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log(`Peter's house price should be ${housePrice}, and he paid ${paidPrice}`);

//Julia`s case:
width = 5;
depth = 15;
heght = 8;
gardenSizeInM2 = 70;
paidPrice = 1_000_000;

//First we calculte house volume:
volumeInMeters = depth * heght * width;
// then use it in house price formula:
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log(`Julia's house price should be ${housePrice}, and she paid ${paidPrice}`);



