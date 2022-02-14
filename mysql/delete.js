const db = require('../config/db');

let deleteQuery = `DELETE FROM petStore WHERE id = ?`;
let data = [10];

db.query(deleteQuery, data, function (err, deleted) {
    if (err) throw err;
    console.log(deleted);
});