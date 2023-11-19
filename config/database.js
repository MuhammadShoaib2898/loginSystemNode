const database = require('mysql');

const pool = database.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB
});

pool.getConnection(err => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = pool;