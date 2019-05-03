const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db("project");
}

function findById(id) {
  return db("project")
    .where({ id })
    .first();
}

function add(project) {
  return db("project")
    .insert(project, "id")
    .then(([id]) => {
      return findById(id);
    });
}
