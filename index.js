const express = require('express');
const { clientDataArr, writeClientData } = require('./assets/scripts/client-data.js');

// Set up express and port
const app = express();
const PORT = 5001;

// middleware
app.use(express.static('public'));
app.use(express.json());

// Route handling
app.post('/update-client-info', (req, res) => {
  const jsonData = req.body;

  !jsonData.firstName || !jsonData.lastName
    ? res.send({ message: 'Incomplete client data: Please try again!' })
    : clientDataArr.push(jsonData);
  
  writeClientData(clientDataArr);
});


// start server
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});