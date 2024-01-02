

const express = require('express');
const router = express.Router();

// Routers
const userRouter = require('./userRoute');


// Routes
router.use('/users', userRouter);


module.exports = router;