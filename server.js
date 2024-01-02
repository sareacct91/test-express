require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// ConnectDB
const connectDB = require("./db/connect");

// Routers
const mainRouters = require("./routes/mainRoute");

// Middlewares
const logger = require("./middlewares/logger");

app.use(express.static("./public"));
app.use(logger);
app.use(express.json());

// Routes
app.use("/", mainRouters);

// Live
const PORT = process.env.PORT || 5001;
(async () => {
  try {

    const { MONGO_URI, PW, MONGO_URI_CONT } = process.env;
    const pw = encodeURIComponent(PW);
    await connectDB(MONGO_URI + pw + MONGO_URI_CONT);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
