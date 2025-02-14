const express = require('express');
const router = express.Router();

//return json web token 
router.post("/signin", (req, res) => {
    const {username, password} = req.body;
    
    res.status(400).json({
        success: true,
        data: JSON.stringify({
            username, password
        })
    })
});

//return array of all user if login is correct
router.get("/users", (req,res) => {

});

module.exports = router