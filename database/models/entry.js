const mongoose = require("mongoose");

const entrySchema = mongoose.Schema({
  keyword: String,
  title: String,
  entry: String,
  location: {
    longitude: String,
    latitude: String,
    height: String,
  },
  links: String,
  guide: String,
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
