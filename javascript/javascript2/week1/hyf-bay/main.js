const products = getAvailableProducts();

function renderProducts(productArray) {
    const list = document.querySelector("ul");
    for (const product of productArray) {
        const li = document.createElement("li");
        const header = document.createElement("h2");
        header.innerHTML = product.name;
        const priceSpan = document.createElement("span");
        priceSpan.innerHTML = "Price: " + product.price;
        const ratingSpan = document.createElement("span");
        ratingSpan.innerHTML = "Rating: " + product.rating;
        li.appendChild(header);
        li.appendChild(priceSpan)
        li.appendChild(document.createElement("br"));
        li.appendChild(ratingSpan);
        list.appendChild(li);
    }
}

renderProducts(products);