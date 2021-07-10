class Product {
    constructor(name, price) {
        this.id;
        this.generateUUID();
        this.name = name;
        this.price = price;
        this.currency = "DKK";
    }

    convertToCurrency(exchangeCurrency) {
        const base = this.currency.toLowerCase();
        const exchange = exchangeCurrency.toLowerCase();
        this.fetchRate(base, exchange);
        this.currency = exchangeCurrency;
    }

    async fetchRate(base, exchange) {
        let rate;
        await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}.json`)
            .then(res => res.json())
            .then(data => {
                rate = data[base][exchange];
                this.price = this.price * rate;
            });
    }

    //adding my feature: generate UUID using api
    async generateUUID() {
        await fetch("https://www.uuidtools.com/api/generate/v1/count/1")
            .then(res => res.json())
            .then(data => this.id = data[0]);
    }

    getPriceString() {
        return this.price.toLocaleString('en-EN', { style: 'currency', currency: this.currency, minimumFractionDigits: 2 })
    }

}


class ShoppingCart {
    constructor() {
        this.products = [];
        //for this exercise I will assume DKK is initial currency
        //I use currency to render totalPrice nicely
        this.currency = "DKK";
    }

    addProduct(product) {
        this.products.push(product);
        //for this exercise I assume all products pushed have the same currency 
        this.currency = product.currency;
    }

    removeProduct(product) {
        this.products = this.products.filter(p => p.id != product.id);
    }

    searchProduct(productName) {
        return this.products.filter(p => p.name === productName);
    }

    getTotal() {
        const priceSum = this.products.reduce((sum, prod) => sum + prod.price, 0);
        return priceSum.toLocaleString('en-EN', { style: 'currency', currency: this.currency, minimumFractionDigits: 2 })
    }

    renderProducts() {
        const productList = document.createElement("ul");
        productList.setAttribute("id", "products-list")
        this.products.forEach(product => {
            const prodListItem = document.createElement("li");
            const productTitle = document.createElement("p");
            productTitle.innerHTML = `${product.name}: ${product.getPriceString()}`
            prodListItem.appendChild(productTitle);
            productList.appendChild(prodListItem);
        })
        document.body.appendChild(productList);
    }

    getUser() {
        return fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}

//testing cart
const shoppingCart = new ShoppingCart();

const products = [
    new Product("flat-screen", 5000),
    new Product("phototocamera", 13000),
    new Product("phone", 300),
    new Product("laptop", 3500),
    new Product("x-box", 4600)];

//testing change currency featutre
products.forEach(p => p.convertToCurrency("USD"));
console.log(products);

products.forEach(p => shoppingCart.addProduct(p));

//render cart after User fetched
shoppingCart.getUser().then(data => {
    renderShoppingCart(data);
});

function renderShoppingCart(userData) {
    const cartTitle = document.createElement("h1");
    cartTitle.innerHTML = `Shopping cart`;
    const userTitle = document.createElement("h3");
    userTitle.innerHTML = `Hi ${userData.name}!`;
    const userEmail = document.createElement("h3");
    userEmail.innerHTML = `Your order confirmation will be sent to ${userData.email}:`
    document.body.appendChild(cartTitle);
    document.body.appendChild(userTitle);
    document.body.appendChild(userEmail);

    shoppingCart.renderProducts();

    const totalPrice = document.createElement("h2");
    totalPrice.innerHTML = `Total: ${shoppingCart.getTotal()}`;
    document.body.appendChild(totalPrice);

    addSearchProductsWithAutocomplete();
}

//adding optional features:
//1. search with autocomplete
//2. open product modal when autocomplete clicked
function addSearchProductsWithAutocomplete() {
    const searchDiv = document.createElement("div");
    searchDiv.setAttribute("class", "autocomplete");
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search product");
    searchDiv.appendChild(searchInput);
    document.body.insertBefore(searchDiv, document.getElementById("products-list"))

    addAutocomplete(searchInput)
}

function addAutocomplete(searchInput) {

    searchInput.addEventListener("input", function () {
        const inpValue = this.value;
        closeAutocomplete();
        if (!inpValue) return false;

        const autocompleteDiv = document.createElement("div");
        autocompleteDiv.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(autocompleteDiv);

        shoppingCart.products.forEach(product => {
            if (product.name.toUpperCase().startsWith(inpValue.toUpperCase())) {
                const resultDiv = document.createElement("div");
                /*make the matching letters bold:*/
                resultDiv.innerHTML = "<strong>" + product.name.slice(0, inpValue.length) + "</strong>";
                resultDiv.innerHTML += product.name.slice(inpValue.length);
                // adding listener to manage click
                resultDiv.addEventListener("click", function () {
                    closeAutocomplete();
                    openProductModal(product);
                });

                autocompleteDiv.appendChild(resultDiv);
            }
        });

    });

    function openProductModal(product) {
        let productModal = document.querySelector("dialog");
        if (!productModal) {
            productModal = document.createElement("dialog");
            document.body.appendChild(productModal);
        }
        productModal.innerHTML = `<p>${product.name} - ${product.getPriceString()}</p>`
        productModal.showModal();
        //add listener to close modal
        productModal.addEventListener("click", function () { this.close() });
    }

    function closeAutocomplete() {
        const items = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < items.length; i++) {
            items[i].parentNode.removeChild(items[i]);
        }
    }
    //close all autocomplete lists when someone clicks in the document
    document.addEventListener("click", function (e) {
        closeAutocomplete();
    });
}