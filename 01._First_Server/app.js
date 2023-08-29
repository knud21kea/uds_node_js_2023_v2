const express = require("express"); // express is a package, it has no extension like .js
const app = express(); // calls create aplication function

//API

app.get("/", (req, res) => {
    res.send({ message: "Our first route"});
});

app.get("/dog", (req, res) => {
    res.send({ message: `woof` });
});

app.get("/dog/:id", (req, res) => {
    res.send({ message: `vuf` });
})

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    balance -= req.params.withdrawalAmount;
    if (balance < 0) {
        res.send({ message: "You can't withdraw. No money left"});
    } else {
        res.send({ message: `You've withdrawn ${req.params.withdrawalAmount}`})
    }
    
})



// Server on dev port

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});