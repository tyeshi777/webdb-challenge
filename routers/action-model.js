const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db("action");
}

function findById(id) {
  return db("action")
    .where({ id })
    .first();
}

function add(action) {
  return db("action")
    .insert(action, "id")
    .then(([id]) => {
      return findById(id);
    });
}
