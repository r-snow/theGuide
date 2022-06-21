require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database");
const path = require("path");

const { findEntryAndUpdate, findEntry } = require("../database/models/entries");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../dist")));

// app.post("/entries", (req, res) => {
//   findEntryAndUpdate(req.body).then(() => res.status(201).send());
// });

// app.get("/entries", (req, res) => {
//   findEntry(req.body).then(() => res.status(201).send());
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
