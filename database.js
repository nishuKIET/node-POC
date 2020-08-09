const MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb').ObjectID;
let mongoDbObj;

MongoClient.connect("mongodb://localhost:27017/BabbuDb", function (err, client) {
    const db = client.db('BabbuDb');

    if (err)
        console.log(err);
    else {
        console.log("Connected to MongoDB");
        mongoDbObj = {
            db: db,
            flatmates: db.collection('Flatmates')
        };
    }
});

function getUsers() {

    return new Promise((resolve, reject) => {
        mongoDbObj.flatmates.find().toArray(function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}

function getUserById(id) {

    return new Promise((resolve, reject) => {
        console.log(id);
        mongoDbObj.flatmates.find({ _id: new ObjectId(id) }).toArray(function (err, data) {
            if (err) {
                reject(err);
            } else {
                console.log(id);
                resolve(data);
            }
        });
    });
}

function addNewUser(newUser) {

    return new Promise((resolve, reject) => {
        mongoDbObj.flatmates.insertOne(newUser, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function updateUser(id, updatedUser) {

    return new Promise((resolve, reject) => {
        mongoDbObj.flatmates.updateOne({ id: id }, { $set: updatedUser }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function deleteUser(id) {

    return new Promise((resolve, reject) => {
        mongoDbObj.flatmates.remove({ id: id }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.addNewUser = addNewUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;