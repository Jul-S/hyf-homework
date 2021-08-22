const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    if (isNaN(req.query.first) && isNaN(req.query.second))
        return res.status(406).json({ error: "Not a number" });

    res.send(`Sum: ${req.query.first + req.query.second}`)
});

app.get("/numbers/multiply/:a/:b", (req, res) => {
    if (isNaN(req.params.a) && isNaN(req.params.b))
        return res.status(406).json({ error: "Not a number" });

    res.send(`Result: ${req.params.a + req.params.b}`)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
