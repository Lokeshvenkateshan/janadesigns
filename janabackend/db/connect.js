const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log("....");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;