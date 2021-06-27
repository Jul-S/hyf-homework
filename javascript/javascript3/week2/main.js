//1.Movies exercise
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(res => res.json())
    .then(data => {
        const arrayBadMovies = data.filter(m => m.rating < 5);
        const arrayBadMoviesSince2000 = arrayBadMovies.filter(m => m.year > 2000)
    })

//2.Promise that resolves after set time
function makePromise(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), resolveAfter * 1000);
    });
}

//When you have written the promise, use it with async/await
async function consumePromiseAsync() {
    const promise = await makePromise(5);
    console.log("I am called asynchronously")
}

//3.1 Rewrite setTimeout to promises.
function setTimeoutPromise(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}
//example of usage
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

//3.2 Rewrite navigator.geolocation.getCurrentPosition to promises.
function getCurrentLocation(timeout) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => resolve(pos)), error => reject(error)
    });
};

//example of usage
getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

//4.Fetching and waiting 3 steps:
//1.Wait 3 seconds
//2.After 3 seconds fetch some data from any api you like
//3.Log out the data from the api

//using promises and .then
new Promise((resolve) =>
    setTimeout(() =>
        fetch("https://yesno.wtf/api")
            .then(res => res.json())
            .then(data => resolve(data.answer)),
        3000)).then(data => console.log("in promise: ", data));

//using async/await
function getData() {
    setTimeout(async () => {
        const fetchedResponse = await fetch("https://yesno.wtf/api");
        const fetchedData = await fetchedResponse.json();
        const answer = fetchedData.answer;
        console.log("async func: ", answer);
    }, 3000)
}

