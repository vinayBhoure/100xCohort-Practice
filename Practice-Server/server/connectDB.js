const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/to-do-app');
        console.log('Connected to Database');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;