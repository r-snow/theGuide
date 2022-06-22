const Entry = require("../models/entry");

const findEntryAndUpdate = ({
  keyword,
  title,
  entry,
  longitude,
  latitude,
  height,
  links,
  guide,
}) =>
  Entry.findOneAndUpdate(
    { title },
    {
      $set: {
        keyword,
        title,
        entry,
        longitude,
        latitude,
        height,
        links,
        guide,
      },
    },
    { new: true, upsert: true, useFindAndModify: false }
  ).then((err, data) => {
    if (err) {
      return console.log(err);
    }
    return console.log(`Updated/Added Entry ${data}`);
  });

module.exports = findEntryAndUpdate;
