//1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
console.log("Script loaded")
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

//2. Create a function that takes 2 parameters: delay and stringToLog. 
//Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments.

function logDelayedString(delaySeconds, stringToLog) {
    setTimeout(() => console.log(stringToLog), delaySeconds * 1000);
}

logDelayedString(1, "Hello after 1 sec");
logDelayedString(2, "World after 2 sec");

//3.Create a button in html. When clicking this button, use the function you created in the 
//previous task to log out the text: `Called after 5 seconds` 5 seconds after the button is clicked.

const btn = document.querySelector("#button3");
btn.addEventListener("click", delayedClick(5, "Called after 5 seconds"));

//creating calback with passed arguments
function delayedClick(delaySeconds, stringToLog) {
    function delayCallback() {
        logDelayedString(delaySeconds, stringToLog);
    }
    return delayCallback;
}

//4.Create two functions and assign them to two different variables. 
//One function logs out Earth, the other function logs out Saturn. 
//Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

function planetLogFunction(callback) {
    return callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Create a button with the text called "Log location". 
//When this button is clicked the location (latitude, longitude) 
//of the user should be logged out using this browser api

const btn2 = document.querySelector("#location");
btn2.addEventListener("click", logLocation);
function logLocation() {
    function success(pos) {
        const latitude = document.querySelector("#lat");
        latitude.innerHTML = `This is the Latitude : ${pos.coords.latitude}`;
        const longitude = document.querySelector("#long");
        longitude.innerHTML = `This is the Longitude : ${pos.coords.longitude}`;

        //6.Optional Now show that location on a map using fx the Google maps api
        // I attach the script for google.maps callback dynamically to work only after button Location pressed
        // Create the script tag, set the appropriate attributes
        var script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDFGlu0GRChxbWdneIqV7lkJrS8B3Hw-ts&callback=initMap';
        script.async = true;

        // Attach initMap callback function to the `window` object
        window.initMap = function () {
            var mapProp = {
                center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                zoom: 10,
            };
            map = new google.maps.Map(document.getElementById("map"), mapProp);
        };

        // Append the 'script' element to 'head'
        document.body.appendChild(script);
    }

    function error(err) {
        console.log("Cannot get your Location");
    }

    navigator.geolocation.getCurrentPosition(success, error);


};


//7. Create a function called runAfterDelay. It has two parameters: delay and callback. 
//When called the function should wait delay seconds and then call the provided 
//callback function. 

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}

runAfterDelay(4, function () {
    console.log("should be logged after 4 seconds");
})

//8. Check if we have double clicked on the page. 
//A double click is defined by two clicks within 0.5 seconds. 
//If a double click has been detected, log out the text: "double click!"

let clickCount = 0;

document.addEventListener("click", function () {
    clickCount++;
    if (clickCount === 1) {
        setTimeout(function () {
            clickCount = 0;
        }, 500);
    } else if (clickCount === 2) {
        clickCount = 0;
        console.log("double click!");
    }
})

//9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
//If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

//Function as a variable

//Create an array with 3 items. All items should be functions. 
//Iterate through the array and call all the functions.
const array = [() => console.log("function 1"), () => console.log("function 2"), () => console.log("function 3")]
array.forEach(func => func());

//Create a function as a const and try creating a function normally. Call both functions.
const myConstFunction = function () {
    console.log("this is my const Function");
}
function myFunciton() {
    console.log("this is my funcion Function");
}
myConstFunction()
myFunciton()

//Create an object that has a key whose value is a function. Try calling this function.
const myObjectFunction = function () {
    console.log("this Function is in object");
}
const myObject = { 'log': myObjectFunction }
myObject.log();

