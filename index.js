const express = require("express");
const bodyParser = require("body-parser");

const port = 5500;

const app = express();
app.use(bodyParser.json());

// GET - gets all arts
app.get("/api/arts", (req, res) => {
    return res.json({ "Hello": "This is GET arts"});
});

// GET - gets art by id
app.get("/api/arts/:id", (req, res) => {
    return res.json({ "Hello": "This is GET art by id"});
});

// POST - creates a new art
app.post("/api/arts", (req, res) => {
    const body = req.body;
    return res.status(201).json({ "Hello": "This is POST arts" });
});

// GET - gets all artists
app.get("/api/artists", (req, res) => {
    return res.json({ "Hello": "This is GET all artists"});
});

// GET - gets artist by id
app.get("/api/artists/:id", (req, res) => {
    return res.json({ "Hello": "This is GET artist by id"});
});

// POST - creates a new art
app.post("/api/artists", (req, res) => {
    const body = req.body;
    return res.status(201).json({ "Hello": "This is POST new artist" });
});

// GET - gets all customers
app.get("/api/customers", (req, res) => {
    return res.json({ "Hello": "This is GET all customers"});
});

// GET - gets a customers by id
app.get("/api/customers/:id", (req, res) => {
    return res.json({ "Hello": "This is GET cutomer by id"});
});

// POST - creates a new art
app.post("/api/customers", (req, res) => {
    const body = req.body;
    return res.status(201).json({ "Hello": "This is POST new customer" });
});

// GET - Gets all auction bids associated with a customer
app.get("/api/customers/:id/auction-bids", (req, res) => {
    return res.json({ "Hello": "This is GET all auction bids by customer id"});
});

// GET - Gets auction by ID
app.get("/api/auctions/:id", (req, res) => {
    return res.json({ "Hello": "This is GET auction by ID"});
});

// GET - Gets winner of the auctions
app.get("/api/auctions/:id/winner", (req, res) => {
    return res.json({ "Hello": "This is GET winner of auction by auction ID"});
});

// POST - creates a new auction
app.post("/api/auctions", (req, res) => {
    const body = req.body;
    return res.status(201).json({ "Hello": "This is POST new auction" });
});

// GET - Gets all bids on auction
app.get("/api/auctions/:id/bids", (req, res) => {
    return res.json({ "Hello": "This is GET all bids on auctions by auction ID"});
});

// POST - creates a new bid on a auction
app.post("/api/auctions/:id/bids", (req, res) => {
    const body = req.body;
    return res.status(201).json({ "Hello": "This is POST new bid by auction ID" });
});


// listens to port with factoral function
app.listen(port, () => {
    console.log("server is listening to port " + port);
});
