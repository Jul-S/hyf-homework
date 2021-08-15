const http = require("http");

const requestHandler = (req, res) => {
    res.statusCode = 200;
    console.log("Inside")
    res.end("hello");
}

http.createServer(requestHandler).listen(4444);

setTimeout(() => {
    http.get("http://localhost:4444", (response) => { console.log("Hello HYF") })
}, 0)

//console.log("Hello HYF")