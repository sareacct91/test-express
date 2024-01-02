

const express = require('express');
const router = express.Router();

// Routers
const userRouter = require('./userRoute');


router.use('/users', userRouter);


module.exports = router;