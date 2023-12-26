const { writeFile, readFileSync } = require("fs");

/* 
  This is not how you should try this. Use a database like mySQL. 
  This is for testing and learning express.js and node fs module
*/

function readClientData () {
  return readFileSync('../data/client-information.json', 'utf8', )
}

function writeClientData (clientDataArr) {
  writeFile('../data/client-information.json', JSON.stringify(clientDataArr), err => err ? console.log(err) : console.log('Client data SAVED!'));
};

let clientDataArr = readClientData() || [];

module.exports = {
  clientDataArr,
  writeClientData
}