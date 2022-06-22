const Entry = require("../models/entry");

const findEntry = (title) => {
  return Entry.findOne({ title: `${title}` }).catch((err) => console.log(err));
};

module.exports = findEntry;
