

const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/userController');



router.route('/register').post(controller.userRegister);
router.route('/login').post(controller.userLogin);


module.exports = router;