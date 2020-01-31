const db = require('../data/dbconfig');

module.exports = {
    insert,
    getAll,
    remove,
}

async function insert(user) {
    return db("users")
        .insert(user)
        .returning("id");
}

function getAll() {
    return db("users");
}

function remove(id) {
    return db('users').del(id);
}