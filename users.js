const users = require('./database.js');

function getUser() {
    return users.userList;
}

function getUserById(id) {
    const userId = users.userList.filter((user) => {
        if (user.id == id) {
            return user;
        }
    });
    return userId;
}

function addNewUser(newUser) {
    users.userList.push(newUser);
    return users.userList;
}

function updateUser(id, updatedUser) {
    users.userList = users.userList.map((user) => {
        if (user.id == id) {
            user = updatedUser;
        }
        return user;
    });
    return users.userList;
}

function deleteUser(id) {
    return users.userList.filter((user) => {
        if (user.id == id) {
            const index = users.userList.indexOf(user);
            users.userList.splice(index, 1);
        }
    });
}

module.exports.getUser = getUser;
module.exports.getUserById = getUserById;
module.exports.addNewUser = addNewUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;