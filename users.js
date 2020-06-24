const users = require('./database.js');

function getUser() {
    return users.userList;
}

function getUserById(id) {
    for (let i = 0; i < users.userList.length; i++) {
        if (id == users.userList[i].id) {
            return users.userList[i];
        }
    }
}

function addNewUser(newUser) {
    users.userList.push(newUser);
    return users.userList;
}

function updateUser(id, updatedUser) {
    for (let i = 0; i < users.userList.length; i++) {
        if (users.userList[i].id == id) {
            users.userList[i] = updatedUser;
            return users.userList;
        }
    }
}

function deleteUser(id) {
    for (let i = 0; i < users.userList.length; i++) {
        if (users.userList[i].id == id) {
            users.userList.splice(i, 1);
            return users.userList;
        }
    }
}

module.exports.getUser = getUser;
module.exports.getUserById = getUserById;
module.exports.addNewUser = addNewUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;