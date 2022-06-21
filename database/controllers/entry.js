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
}) => {
  console.log("getting to post controller");
  return Entry.findOneAndUpdate(
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
    // (err, data) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   return console.log(`Updated/Added Entry ${data}`);
    // }
  );
};

module.exports = findEntryAndUpdate;
