const express = require('express');
const router = express.Router();

// Import routes
const clientRoute = require('./clientRoute');

// Use the routes
router.use('/clients', clientRoute);

// Export router
module.exports = router