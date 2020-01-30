const db = require('../data/dbconfig');

module.exports = {
    insert,
    getAll,
}

async function insert(user) {
    return db("users")
        .insert(user)
        .returning("id");
}

function getAll() {
    return db("users");
}