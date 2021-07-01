const btnGetCity = document.getElementById('btnGetCity');
const btnGetLoc = document.getElementById('btnGetLoc');
const displayMessage = document.getElementById("displayMessage");
const displayWeather = document.getElementById("displayWeather");

//onload show weather for saved city or location in localstorage
window.onload = () => {
    const localCity = localStorage.getItem("city");
    const localLatitude = localStorage.getItem("lat");
    const localLongitude = localStorage.getItem("lon");
    if (localCity) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${localCity}&appid=e75ca172f74f2d4c651c1c428d8fac19&units=metric`
        fetchWeather(url);
    } else if (localLatitude && localLongitude) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${localLatitude}&lon=${localLongitude}&appid=e75ca172f74f2d4c651c1c428d8fac19&units=metric`
        fetchWeather(url);
    }
};

btnGetCity.addEventListener("click", getWeatherByCityName);
btnGetLoc.addEventListener("click", getWeatherByGeoLoc);

function getWeatherByCityName() {
    displayWeather.hidden = true;
    const cityInput = document.getElementById("cityInput").value;
    if (cityInput) {
        localStorage.setItem("city", cityInput);
        displayMessage.innerHTML = "Loading..."
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=e75ca172f74f2d4c651c1c428d8fac19&units=metric`
        fetchWeather(url);
    } else {
        displayMessage.innerHTML = "Please specify city first"
    }
}

function getWeatherByGeoLoc() {
    displayWeather.hidden = true;
    function success(pos) {
        displayMessage.innerHTML = "Loading..."
        localStorage.setItem("lat", pos.coords.latitude);
        localStorage.setItem("lon", pos.coords.longitude);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=e75ca172f74f2d4c651c1c428d8fac19&units=metric`
        fetchWeather(url);
    }
    function error(err) {
        displayMessage.innerHTML = "Could not get your current location"
    }
    navigator.geolocation.getCurrentPosition(success, error);
};

function fetchWeather(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderWeatherData(data);
        })

}

function renderWeatherData(data) {
    displayMessage.innerHTML = "";
    displayWeather.hidden = false;
    renderCityName(data.name);
    renderTemp(data.main.temp);
    renderIcon(data.weather[0].icon);
    renderWindSpeed(data.wind.speed);
    //adding my feature arrow pointing wind direction
    renderWindDirection(data.wind.deg);
    renderCloudness(data.clouds.all);
    renderSunriseSunset(data.sys.sunrise, data.sys.sunset);
    renderMap(data.coord.lat, data.coord.lon);
}

function renderSunriseSunset(sunriseUnixTime, sunsetUnixTime) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const dateSunrise = new Date(sunriseUnixTime * 1000);
    const dateSunset = new Date(sunsetUnixTime * 1000);

    const sunriseSpan = document.getElementById("sunrise");
    sunriseSpan.innerHTML = `Sunrise: ${dateSunrise.getHours()}:${dateSunrise.getMinutes()}`;

    const sunsetSpan = document.getElementById("sunset");
    sunsetSpan.innerHTML = `Sunset: ${dateSunset.getHours()}:${dateSunset.getMinutes()}`;
}

function renderCloudness(clouds) {
    const cloudsSpan = document.getElementById("clouds");
    cloudsSpan.innerHTML = "Cloudness:" + clouds + "%";
}

function renderWindSpeed(speed) {
    const windSpan = document.getElementById("wind");
    windSpan.innerHTML = "Wind speed: " + speed + " m/s";
}
//adding wind direction arrow /optional feature/
function renderWindDirection(deg) {
    const windArrow = document.getElementById("arrow");
    //need to substract 90deg since my arrow is pointing right initialy
    const degrees = deg - 90;
    windArrow.style.transform = `rotate(${degrees}deg)`;
}

function renderIcon(iconCode) {
    const img = document.querySelector("img");
    img.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function renderTemp(temp) {
    const displayTemp = document.getElementById("temp");
    displayTemp.innerHTML = "+" + Math.round(temp) + "°";
}

function renderCityName(cityName) {
    const displayCity = document.getElementById("city");
    displayCity.innerHTML = cityName;
}

function renderMap(latitude, longitude) {
    //add script for map callback to document
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDFGlu0GRChxbWdneIqV7lkJrS8B3Hw-ts&callback=initMap';
    script.async = true;
    // attach initMap callback function to the `window` object
    window.initMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 10,
        };
        map = new google.maps.Map(document.getElementById("map"), mapProp);
    };

    // Append the 'script' element to 'head'
    document.body.appendChild(script);
}
