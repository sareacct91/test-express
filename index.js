const express = require('express');
const app = express();
const PORT = 5001;

// Middleware
app.use(express.static('public'));
app.use(logger);

// Import the main route handler
const mainRouter = require('./routes/mainRoute');
app.use('/', mainRouter);

// Custome middleware
function logger(req, res, next) {
  console.log(`Request received: ${req.method} ${req.path}`);
  next();
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is live on port: ${PORT}`);
})