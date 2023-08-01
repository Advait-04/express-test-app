const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
    console.log("pinged the api");
    res.status(500).json({
        message: "Hello",
    });
});

app.get("/", (req, res) => {
    res.send("The app is working");
});

app.listen(5000, () => {
    console.log("listening on port 5000");
});
