const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/multiply", (req, res) => {
    let result = 1;
    //this will work with many params in case every param is called with a new name
    for (const param in req.query) {
        if (isNaN(Number(req.query[param])))
            return res.status(406).json({ error: "Not a number" });

        result = result * Number(req.query[param]);
    }
    res.send(`Result: ${result}`)
});

app.get("/calculator/add", (req, res) => {
    let result = 0;
    for (const param in req.query) {
        if (isNaN(Number(req.query[param])))
            return res.status(406).json({ error: "Not a number" });

        result = result + Number(req.query[param]);
    }
    res.send(`Sum: ${result}`)
});

app.post("/calculator/substract", (req, res) => {
    if (isNaN(Number(req.body.firstParam)) || isNaN(Number(req.body.secondParam)))
        return res.status(406).json({ error: "Not a number" });

    const result = Number(req.body.firstParam) - Number(req.body.secondParam);

    res.send(`Result: ${result}`)
});

app.post("/calculator/division", (req, res) => {
    if (isNaN(Number(req.body.firstParam)) || isNaN(Number(req.body.secondParam)))
        return res.status(406).json({ error: "Not a number" });

    const result = Number(req.body.firstParam) / Number(req.body.secondParam);

    res.send(`Result: ${result}`)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
