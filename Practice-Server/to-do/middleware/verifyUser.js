const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            success: false,
            message: 'User is not logged in.'
        });
    }

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded._id) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }

    req.body.userId = decoded._id;
    next();

}

module.exports = verifyUser;