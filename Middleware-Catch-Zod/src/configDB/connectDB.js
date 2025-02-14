const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("",{
            useNewUrlParser: true,
            useUnifiedTopology: true
            });

        console.log("MongoDb connected Successfully: ")
    }catch(err){
        console.error(err.errors);
    }
};

module.exports = connectDB;