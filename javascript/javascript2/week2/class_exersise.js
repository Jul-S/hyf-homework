/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];

    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for (let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];

            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

//Create 37 listings and log out every listings size
const listings = generateListings(37);
//listings.forEach(l => console.log(l.size));

//Create 37 listings and log out every listings size
const pricesArray = listings.map(l => l.price);

//Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
const cheapArray = listings.filter(l => l.price < 2000);

//Create an array of expensive listings prices. Each item in this array should be of type number
const expensivePrices = pricesArray.filter(p => p > 2000);

//Create an array of listings that have parking. Each item in this array should be of type object
const listingsWithParking = listings.filter(l => l.facilities.includes('Parkering'));

//Your job is to create the filterListings function. The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!
const filter = {
    type: 'farm',
};

const farmListings = filterListings(listings, filter);
console.log(farmListings);
const filter2 = {
    type: 'farm',
    facilities: ["Parkering", "Husdyr"],
    hasGarden: false,
    minPrice: 1000
};

const cheapFarmListings = filterListings(listings, filter2);
console.log(cheapFarmListings);

//funciton implementation
function filterListings(listings, filter) {
    const supportedFilters = ["type", "facilities", "minPrice", "hasGarden", "minSize"]
    if (!Object.keys(filter).every(filterType => supportedFilters.includes(filterType))) return "This filter type is not supported";

    if (filter.type != undefined) {
        listings = listings.filter(listing => listing.type.toLowerCase() === filter.type.toLowerCase())
    }

    if (filter.facilities != undefined) {
        listings = listings.filter(listing => filter.facilities.every(elem => listing.facilities.includes(elem)))
    }

    if (filter.hasGarden != undefined) {
        listings = listings.filter(listing => listing.hasGarden === filter.hasGarden)
    }

    if (filter.minPrice != undefined) {
        listings = listings.filter(listing => listing.price > filter.minPrice)
    }

    if (filter.minSize != undefined) {
        listings = listings.filter(listing => listing.size > filter.minSize)
    }

    return listings;
}

renderListings(farmListings);
// implement render function
function renderListings(listings) {
    const body = document.querySelector("body");
    listings.forEach(listing => {
        const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card");
        
        const textDiv = document.createElement("div");
        textDiv.setAttribute("class", "text");

        const title = document.createElement("h2");
        title.innerHTML = listing.type;

        const size =  document.createElement("p");
        size.innerHTML = `Size: ${listing.size} m2`

        const price =  document.createElement("p");
        price.innerHTML = `Price: ${listing.price} mln kr`

        const garden =  document.createElement("p");
        garden.innerHTML = `Has garden: ${listing.hasGarden ? "Yes" : "No"}`

        const facilities =  document.createElement("p");
        facilities.innerHTML = "Facilities: "
        listing.facilities.forEach(fac => facilities.innerHTML += fac + " ");

        const img =  document.createElement("img");
        img.setAttribute("src", listing.img)

        textDiv.appendChild(title);
        textDiv.appendChild(size);
        textDiv.appendChild(price);
        textDiv.appendChild(garden);
        textDiv.appendChild(facilities);

        cardDiv.appendChild(textDiv);
        cardDiv.appendChild(img);
        body.appendChild(cardDiv);
    })
}