const { writeFile, readFileSync } = require("fs");

/* 
  This is not how you should try this. Use a database like mySQL. 
  This is for testing and learning express.js and node fs module
*/

function readClientData () {
  return readFileSync('./assets/data/client-information.json', 'utf8', (err, data) => {
    err ? console.log(err) : console.log('Read SUCCESS!');
  });
}

function writeClientData (clientDataArr) {
  writeFile('./assets/data/client-information.json', JSON.stringify(clientDataArr), err => err ? console.log(err) : console.log('Client data SAVED!'));
};


let clientDataArr = readClientData() || [];
console.log(clientDataArr);

module.exports = {
  clientDataArr,
  writeClientData
}