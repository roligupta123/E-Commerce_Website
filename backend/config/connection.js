const mongoose = require("mongoose")

const URI = process.env.MONGO_URI

const connection = async() =>{
    try {
       const connect = await mongoose.connect(URI)
       console.log("Connected to MongoDB");     
    } catch (error) {
        console.log("Error while connecting with Database");
        process.exit(1)
    }
}

module.exports = {connection};