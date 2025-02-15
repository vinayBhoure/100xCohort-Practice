const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const { validateUser } = require('../middleware/validator');
const { verifyUser } = require('../middleware/verifyUser')

router.post('/register', validateUser, registerUser);
router.post('/login', loginUser);

module.exports = router;