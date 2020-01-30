const express = require('express');

const Users = require('../users/usersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: "up" })
})

server.get('/users', (req, res) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({error: "error retrieving usres"}, error)
        })
})

module.exports = server;