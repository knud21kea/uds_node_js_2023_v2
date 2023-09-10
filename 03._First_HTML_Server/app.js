const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
});

app.get("/secondPage", (req, res) => {
    res.sendFile(__dirname + "/secondPage.html");
});


// Server on dev port

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server not started", error);
        return;
    }
    console.log("Server is running on port", PORT);
});