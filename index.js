const express = require('express');
const { clientDataArr, writeClientData } = require('./assets/scripts/client-data.js');

// Set up express and port
const app = express();
const PORT = 5001;

// middleware
app.use(express.static('public'));
app.use(express.json());

// Route handling
app.get('/retrieve-client-info', (req, res, next) => {
  if (req.query) {
    next();
  } else {
    res.send({ message: "Please send the information of the client you're looking for!" });
  }

}, (req, res, next) => {
  // Get the data from the queryParameters
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const phoneNumber = req.query.phoneNumber;
  const email = req.query.email;

  let matchedClient = [];

  // Loop through the clientDataArr
  for (const client of clientDataArr) {
    // if first and last name matched, or phone number matched, or email matched
    if ((client.firstName === firstName && client.lastName === lastName)
      || client.phoneNumber === phoneNumber || client.email === email) {
      
      // Set matchedClient to the client object
      matchedClient.push(client);
      console.log('Found matching client info', client);
    }
  }
  // If matchedClient was found, send back the data
  matchedClient ? res.send(matchedClient) : res.send("No matching client");
});

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
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});