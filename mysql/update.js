const db = require('../config/db');

let updateQuery = `UPDATE todo SET description = ? WHERE id = ?`;
let data = ['Megan', 2];

db.query(updateQuery, data, function (err, updated) {
    if (err) throw error;
    console.log(updated);
});