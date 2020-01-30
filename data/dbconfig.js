const knex = require('knex');

const knexFileConfig = require('../knexfile');

const environment = process.env.DB+ENV || 'development';

module.exports = knex(knexFileConfig[environment]);