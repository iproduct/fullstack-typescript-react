const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectId = mongo.ObjectId;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async client => {
    console.log("Database connected.");
    const db = client.db('webstore3');
    const prod = await db.collection('products')
        .findOne({ _id: new ObjectId("60b50715252cbe62c86af650") });
    console.log(prod);
    client.close();  
});