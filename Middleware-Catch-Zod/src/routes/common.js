const express = require('express');
const router = express.Router();

router.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidney = req.query.id;

    if(username ==! "vinay" || password != "1234"){
        res.status(400).json({
            "error": "Invalid username or password"
        })
    }
    if(kidney ==! 1 || kidney ==! 2){
        res.status(400).json({
            "error": "Invalid kidney type"
        })
    }
});

module.exports = router;