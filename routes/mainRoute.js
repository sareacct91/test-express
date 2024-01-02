

const express = require('express');
const router = express.Router();

// Routers
const userRouter = require('./usersRoute');


// Routes
router.use('/users', userRouter);


module.exports = router;