const express = require('express');
const { clientDataArr, writeClientData } = require('./assets/scripts/client-data.js');

// Set up express and port
const app = express();
const PORT = 5001;

// middleware
app.use(express.static('public'));
app.use(express.json());

// Route handling
app.post('/update-client-info', (req, res, next) => {
  const jsonData = req.body;

  if (!jsonData.firstName || !jsonData.lastName) {
    res.send({ message: 'Incomplete client data: Please try again!' })
  
  } else {
    res.send({ message: "Client data RECEIVED!" });
    console.log(jsonData);
    next();
  }

}, (req, res, next) => {
  clientDataArr.push(req.body);
  writeClientData(clientDataArr);
  console.log(clientDataArr);
});



// start server
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});