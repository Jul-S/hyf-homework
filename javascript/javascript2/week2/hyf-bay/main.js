console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const list = document.querySelector("ul");
let showedProduts = products;

function renderProducts(productArray) {
    // your code here
    for (const product of productArray) {
        const li = document.createElement("li");
        const header = document.createElement("h2");
        header.innerHTML = product.name;
        const price = document.createElement("span");
        price.innerHTML = "Price: " + product.price;
        const rating = document.createElement("span");
        rating.innerHTML = "Rating: " + product.rating;
        li.appendChild(header);
        li.appendChild(price)
        li.appendChild(document.createElement("br"));
        li.appendChild(rating);
        list.appendChild(li);
    }
}

renderProducts(products);

const inputName = document.querySelector("#nameFilter");
const inputPrice = document.querySelector("#priceFilter");
//filtering by product name
inputName.addEventListener("keyup", () => {
    showedProduts = products.filter(listing => listing.name.toLowerCase().includes(inputName.value.toLowerCase()));
    list.innerHTML = "";
    renderProducts(showedProduts);
})
//filtering by product MAX price
inputPrice.addEventListener("input", () => {
    showedProduts = products.filter(listing => listing.price < inputPrice.value);
    list.innerHTML = "";
    renderProducts(showedProduts);
})

//sorting
const radios = document.getElementsByName('sort');
radios.forEach(radio => radio.addEventListener('change', changeSort));

function changeSort() {
    list.innerHTML = "";
    let sorted;
    for (const radio of radios) {
        if (radio.checked) {
            switch (radio.value) {
                case "name":
                    sorted = showedProduts.sort((a, b) => a.name - b.name);
                    break;
                case "price":
                    sorted = showedProduts.sort((a, b) => a.price - b.price);
                    break;
                case "rating":
                    sorted = showedProduts.sort((a, b) => a.rating - b.rating);
                    break;
            }
        }
    }
    renderProducts(sorted);
}