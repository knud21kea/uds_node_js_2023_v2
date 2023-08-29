/*
Mountains REST API

Uses an array of mountain objects to simulate DB
It is invisioned that a mountain has for now the following properties:
    id
    name
    height (m)
    description
*/

// -----------------------------------------------------------------------------------------------
// Data

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

let lastID = 3; // Global variable ;)

/* test data for POST mapping in Postman
{
    "name" : "Everest",
    "height" : 8848,
    "description" : "Earth's highest mountain above sea level."
}
*/

/* test data for PATCH
{ 
    "height" : "964",
    "name" : "Scafell"
}
*/

// ----------------------------------------------------------------------------------------------
// Create server instance

const express = require("express");
const app = express();
app.use(express.json()); // enables POST


// ----------------------------------------------------------------------------------------------
// API

//Endpoint to send all mountains via HTTP GET mapping
app.get("/mountains", (req, res) => {
    res.send(mountains);
});


// Endpoint to send the mountain with 'id: id' via HTTP GET mapping
app.get("/mountains/:id", (req, res) => {
    const mountainToGet = mountains.find(mountain => mountain.id === parseInt(req.params.id)); // returns undefined if no mountain with that id
    if (mountainToGet) {
        res.send(mountainToGet);
    } else {
        res.send({ error: "Mountain not found. " })
    }
});


// Endpoint to create one mountain with 'auto-incremented' id via HTTP POST mapping
app.post("/mountains", (req, res) => {
    lastID++;
    mountains.push({
        id: lastID, ...req.body, id: lastID // prevents injecting wrong ID
    });
    res.send({ created: mountains.slice(-1)[0] });
});


// Endpoint to update the mountain with 'id: id' via HTTP PATCH mapping
// API design is changed from the original PUT. Not sure if both are required.
app.patch("/mountains/:id", (req, res) => {
    const indexOfMountainToUpdate = mountains.findIndex(mountain => mountain.id === parseInt(req.params.id));
    if (indexOfMountainToDelete > -1) {
        mountains[indexOfMountainToUpdate] = { ...mountains[indexOfMountainToUpdate], ...req.body };
        res.send({ updated: mountains[indexOfMountainToUpdate] });
    } else {
        res.send({ error: "Mountain not found. " })
    }
});


// Endpoint for the API to delete the mountain with 'id: id' via HTTP DELETE mapping
app.delete("/mountains/:id", (req, res) => {
    const indexOfMountainToDelete = mountains.findIndex(mountain => mountain.id === parseInt(req.params.id));
    let mountainDeleted = [];
    if (indexOfMountainToDelete > -1) {
        mountainDeleted = mountains.splice(indexOfMountainToDelete, 1);
        res.send({ deleted: mountainDeleted[0] });
    } else {
        res.send({ error: "Mountain not found. " })
    }

});


// ----------------------------------------------------------------------------------
// Server on dev port

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});