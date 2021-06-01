const MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(client => {
    const db = client.db('webstore3');
    db.collection('products')
        // .find({ name: /^Super/ })
        .find()
        .project({name: 1, price: 1})
        .sort({price: -1})
        .toArray().then(res => {
            console.log(res);
            client.close();
        });
    console.log("Database connected.");
});