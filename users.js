const users = require('./database.js');

function getUser() {
    return users.getUsers()
        .then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
}

function getUserById(id) {
    return users.getUserById(id)
        .then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
}

function addNewUser(newUser) {
    return users.addNewUser(newUser)
        .then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
}

function updateUser(id, updatedUser) {

    return users.updateUser(id, updatedUser)
        .then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
}

function deleteUser(id) {
    return users.deleteUser(id)
        .then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
}

module.exports.getUser = getUser;
module.exports.getUserById = getUserById;
module.exports.addNewUser = addNewUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;