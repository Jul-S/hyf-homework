class Product {
    constructor(name, price) {
        this.id = this.generateUUID();
        this.name = name;
        this.price = price;
        this.currency = "DKK";
    }
    convertToCurrency(currency) {
        fetchCurrencyRate()
        this.currency = currency;
    }
    //adding my feature: generate UUID using api
    async generateUUID() {
        await fetch("https://www.uuidtools.com/api/generate/v1/count/1")
            .then(res => res.json())
            .then(data => this.id = data[0]);
    }
}

function fetchCurrencyRate() {

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
        this.products.forEach(product => {
            const prodListItem = document.createElement("li");
            const productTitle = document.createElement("p");
            const priceString = product.price.toLocaleString('en-EN', { style: 'currency', currency: product.currency, minimumFractionDigits: 2 })
            productTitle.innerHTML = `${product.name}: ${priceString} ${product.currency}`
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

const shoppingCart = new ShoppingCart();

const products = [
    new Product("flat-screen", 5000),
    new Product("phone", 300),
    new Product("laptop", 3500),
    new Product("x-box", 4600)];

//testing change currency featutre
products.forEach(p => p.convertToCurrency("USD"));

products.forEach(p => shoppingCart.addProduct(p));

//render cart after fetched User
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

    addSearchProductsInput();
}