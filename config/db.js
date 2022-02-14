var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignmentday30',
    port: 3306
});

module.exports = db;