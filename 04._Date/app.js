const express = require("express");
const app = express();

console.log(Date.now());

app.get("/date", (req, res) => {
    let date = new Date();
    res.send({ data: date} );
});

app.get("/month", (req, res) => {
    let monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    let date = new Date();
    res.send({ data: monthNames[date.getMonth()]} );
});

app.get("/day", (req, res) => {
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdy", "Friday", "Saturday"];
    let date = new Date();
    res.send({ data: dayNames[date.getDay()]} );
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