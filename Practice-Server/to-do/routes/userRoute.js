const express = require('express');
const { registerUser, loginUser, terminateUser } = require('../controllers/userController');
const router = express.Router();
const { validateUser } = require('../middleware/validator');

router.post('/register', validateUser, registerUser);
router.post('/login', loginUser);
router.post('/terminate', terminateUser);

module.exports = router;