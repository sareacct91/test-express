const express = require('express');
const cors = require('cors');
const writeJsonFile = require('./filesystem.js');

// create instance
const app = express();
const port = 5001;

// middleware
app.use(express.json());
app.use(cors());

// GET
app.get('/GET-command', (req, res) => {
  res.send({ message: 'Take this string!' });
});

// POST
app.post('/POST-command', (req, res) => {
  const dataJson = req.body;

  console.log(dataJson);
  res.send({ message: 'I got your data' });

  writeJsonFile(dataJson);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})