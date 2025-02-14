const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name should be atleast 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        isValidate: [validator.default.isEmail, 'Invalid Email Address']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password should be atleast 8 characters long']
    }
}, {
    timestamps: true
});

UserModel.methods.generateToken = async function() {
    const user = this;
    const token = jwt.sign({
        _id: user._id
    },
    process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
    return token;
}

UserModel.methods.comparePassword = async function(password) {
    const user = this;
    return bcrypt.compare(password, user.password);
}

UserModel.statics.hashedPassword = async function(password) {
    return bcrypt.hash(password, 10);
}

module.exports = mongoose.model('todo-User', UserModel);
