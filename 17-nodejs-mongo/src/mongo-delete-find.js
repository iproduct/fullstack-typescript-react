const MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, con) {
    if (err) throw err;
    const db = con.db('webstore3');
    db.collection('products')
        .findOneAndDelete({ name: 'Super Mouse' })
        .then(deleted => {
            console.log(`${JSON.stringify(deleted.value?.name)} product deleted successfully.`);
        }).catch(err => {
            console.log("Error: Delete unsuccessfull.")
        }).finally(() => {
            con.close();
        })

});