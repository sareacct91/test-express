const express = require('express');

// Set up express and port
const app = express();
const PORT = 5001;

// middleware
app.use(express.static('public'));

// Route handling


// start server
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});