const express = require('express');
const app = express();
const PORT = 5001;

// Middleware
app.use(express.static('public'));

// Import the main route handler
const mainRouter = require('./routes/mainRoute');
app.use('/', mainRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is live on port: ${PORT}`);
})