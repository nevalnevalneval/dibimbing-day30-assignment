const db = require("../config/db");

function insertPetStore(req, res) {
  let data = [
    req.body.petId,
    req.body.quantity,
    req.body.status,
    req.body.completed,
  ];
  let insertQuery = `INSERT INTO petStore (petId, quantity, status, completed) VALUES (?);`;
  db.query(insertQuery, [data], function (error, results, fields) {
    if (error) throw error;
  });

  res.send({ message: "Data has been inserted", data: data });
}

function listPetStore(req, res) {
  let selectQuery = `SELECT * FROM petStore`;
  db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    res.send({ message: "Data is found", data: results });
  });
}

function updatePetStore(req, res) {
  let updateQuery = `UPDATE petStore SET petId =?, quantity =?, status=?, completed=? WHERE id = ?`;
  let data = [
    req.body.petId,
    req.body.quantity,
    req.body.status,
    req.body.completed,
    req.params.id,
  ];

  db.query(updateQuery, data, function (error, result, fields) {
    if (error) throw error;
  });

  res.send({ message: "Data has been updated", data: req.body });
}

function deletePetStore(req, res) {
  let deleteQuery = `DELETE FROM petStore WHERE id = ?`;
  let data = [req.params.id];

  db.query(deleteQuery, data, function (err, deleted) {
    if (err) throw err;
  });
  res.send({ message: "Data has been deleted" });
}

module.exports = {
  insertPetStore,
  listPetStore,
  updatePetStore,
  deletePetStore,
};
