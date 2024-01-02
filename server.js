require('express-async-errors')

const express = require('express');
const app = express();


// Routers
const mainRouters = require('./routes/mainRoute');


// Middlewares
const logger = require('./middlewares/logger');

app.use(express.static('./public'));
app.use(logger);
app.use(express.json());

// Routes
app.use('/', mainRouters);

// Live
const PORT = process.env.PORT || 5001;
(async () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  })
})();