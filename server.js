const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
    console.log("pinged the api");
    res.status(200).json({
        message: "Hello I am sentient human from axios",
    });
});

app.get("/", (req, res) => {
    res.send("The app is working");
});

app.listen(5000, () => {
    console.log("listening on port 5000");
});
