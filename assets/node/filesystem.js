const { writeFile } = require("fs");

const writeJsonFile = (data) => {
  writeFile('./data/client-information.json', JSON.stringify(data), err => err ? console.log(err) : console.log("Data SAVED!"));
};

module.exports = writeJsonFile;