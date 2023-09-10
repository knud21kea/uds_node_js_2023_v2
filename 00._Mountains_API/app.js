const express = require("express");
const app = express();

const mountains = []; // implementation is a simple array of objects, no persistence

mountains.push({
    id: 1, name: "Scafell Pike", height: 978,
    description: "The highest and the most prominent mountain in England."
});

mountains.push({
    id: 2, name: "Galdhøpiggen", height: 2469,
    description: "The highest mountain in Norway, Scandinavia, and Northern Europe."
});

mountains.push({
    id: 3, name: "Mount Blanc", height: 4807,
    description: "The highest mountain in the Alps and Western Europe."
});

app.get("/mountains", (req, res) => {
    res.send({ data: mountains} );
});

app.get("/mountains/:id", (req, res) => {
    const mountainToGet = mountains.find(mountain => mountain.id === parseInt(req.params.id)); // returns undefined if no mountain with that id
    if (mountainToGet) {
        res.send({ data: mountainToGet });
    } else {
        res.send({ error: "Mountain not found. " })
    }
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting server");
        return;
    }
    console.log("Server is running on port", PORT);
});