const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

const connect = async () => {
  try {
    await client.connect();

    await client.db("sample_mflix").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(err){
    console.log(err)
  }
  finally {    
    await client.close();
  }
}

module.exports = connect;
