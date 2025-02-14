const asyncError = require('../middleware/asyncError');
const UserModel = require('../models/UserModel');

const registerUser = asyncError(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: 'false',
            message: 'All fields are required'
        });
    }

    let user;
    user = await UserModel.findOne({ email });
    if (user) {
        return res.status(400).json({
            success: 'false',
            message: 'User already exists'
        });
    }

    const hashedPassword = await UserModel.hashedPassword(password);

    const newUser = new UserModel({
        name,
        email,
        password: hashedPassword
    })

    await newUser.save();
    const token = await newUser.generateToken();
    res.status(201).json({
        success: 'true',
        message: 'User registered successfully',
        user: newUser,
        token
    });

});
const loginUser = asyncError(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: 'false',
            message: 'All fields are required'
        });
    }

    let user;
    user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: 'false',
            message: 'Invalid credentials'
        });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({
            success: 'false',
            message: 'Invalid credentials'
        });
    }

    const token = await user.generateToken();
    res.status(200).json({
        success: 'true',
        message: 'User logged in successfully',
        user,
        token
    });
});

const terminateUser = asyncError(async (req, res) => { });

module.exports = { registerUser, loginUser, terminateUser };