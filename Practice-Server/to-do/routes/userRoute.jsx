const express = require('express');
const { registerUser, loginUser, terminateUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/terminate', terminateUser);

module.exports = router;