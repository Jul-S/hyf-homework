const products = getAvailableProducts();

function renderProducts(productArray) {
    const list = document.querySelector("ul");
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