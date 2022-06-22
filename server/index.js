// require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("../database");

const findEntryAndUpdate = require("../database/controllers/entry");
const findEntry = require("../database/controllers/findEntry");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../dist")));

app.post("/entry", (req, res) => {
  console.log(req.body);
  findEntryAndUpdate(req.body)
    .then((data) => res.status(201).send(data))
    .catch((err) => console.log(err));
});

app.get("/entry/:title", (req, res) => {
  findEntry(req.params.title)
    .then((data) => res.status(201).send(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
