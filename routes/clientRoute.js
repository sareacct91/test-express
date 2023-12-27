const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Middleware
router.use(express.json());

// Search for user
router.route('/')
  .get(clientController.getClient)
  .post(clientController.createClient)

// Export router
module.exports = router;