var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/BabbuDb", function (err, client) {
    const db = client.db('BabbuDb');

    if (err)
        console.log(err);
    else {
        console.log("Connected to MongoDB");
    }
});