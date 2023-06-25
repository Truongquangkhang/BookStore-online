const mongoose = require('mongoose')
require('dotenv').config()
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected");
    } catch (err) {
        console.log(err);
    }
}




module.exports = {
    connect
}