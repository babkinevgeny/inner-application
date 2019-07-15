const { Client } = require('pg');

const client = new Client({
    user: 'evgenybabkin',
    host: 'localhost',
    database: 'zaoks',
    post: 5432
});

module.exports = client;