const Fs = require("fs");

module.exports = (imagePath) => {
  Fs.unlink(imagePath, (err) => {
    if (err) {
      console.log(`Deleting image error :: ${err}`);
    }
  });
};