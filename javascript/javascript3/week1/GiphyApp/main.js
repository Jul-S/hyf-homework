const btn = document.getElementById('btnGetGif');
btn.addEventListener("click", getGifBySearchWord);
const inputNumber = document.getElementById('numberInput');
//as specified in homework task I will only limit gifs AFTER I fetched them
inputNumber.addEventListener("input", limitNumberOfGifs);
const displayResult = document.getElementById("searchResult");

//global variable to hold fetched gif urls
let imgUrlArray;

function getGifBySearchWord() {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput) {
        displayResult.innerHTML = "Loading..."
        const url = `https://api.giphy.com/v1/gifs/search?api_key=TiUGh7M7GYEDMAHpGFi43098D7Ort4ij&q=${searchInput}&lang=en`
        fetchGifs(url);
    } else {
        displayResult.innerHTML = "Please specify search word first"
    }
}

function limitNumberOfGifs() {
    const number = inputNumber.value;
    if (!isNaN(number) && number > 0) {
        const limitedUrlsArray = imgUrlArray.slice(0, number);
        renderGifs(limitedUrlsArray);
    }
}

function fetchGifs(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            imgUrlArray = data.data.map(x => x.images.fixed_height_small.url);
            renderGifs(imgUrlArray);
        });
}

function renderGifs(urlsArray) {
    displayResult.innerHTML = "";
    urlsArray.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        displayResult.appendChild(img);
    })
}