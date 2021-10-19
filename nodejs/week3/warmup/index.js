const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("nodejs week3 homework"));

function sendResponse(result, response) {
    isNaN(result) ? response.status(400).send("Input must be number") : response.send(`Result: ${result}`);
}

app.get("/calculator/multiply", (req, res) => {
    try {
        let result = 1;
        //this will work with many params in case every param is called with a new name
        for (const param in req.query) {
            result = result * Number(req.query[param]);
        }
        sendResponse(result, res);
    } catch {
        response.status(500).send({ error: "Internal Server Error." });
    }
});

app.get("/calculator/add", (req, res) => {
    let result = 0;
    for (const param in req.query) {
        result = result + Number(req.query[param]);
    }
    sendResponse(result, res)
});

app.post("/calculator/substract", (req, res) => {
    const result = Number(req.body.firstParam) - Number(req.body.secondParam);

    sendResponse(result, res);
});

app.post("/calculator/division", (req, res) => {
    const result = Number(req.body.firstParam) / Number(req.body.secondParam);

    sendResponse(result, res)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
