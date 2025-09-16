
// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = process.env.MONGO_URI

// const client = new MongoClient(uri,  {
  
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );

// const connect = async () => {
//   try {
//     await client.connect();

//     await client.db("sample_mflix").command({ ping: 1 });
//     console.log("You successfully connected to MongoDB!");
//   } 
//   catch(err){
//     console.log(err)
//   }
//   finally {    
//     await client.close();
//   }
// }

// module.exports = connect;

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    console.log('Connecting to:', process.env.MONGO_URI); // Debug
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
