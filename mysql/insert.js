const db = require('../config/db');

let data = [
    {petId:1, quantity:29, status:"placed", completed:"true"},
];

data.forEach (value => {
    let insertQuery = `INSERT INTO petStore (petId, quantity, status, completed) VALUES (?);`
    db.query(insertQuery, value[{petId, quantity, status, completed}], function (error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});