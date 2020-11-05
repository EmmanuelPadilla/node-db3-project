// // scheme-model
const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  remove,
};

function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes").where({ id }).first();
}
function findSteps(id) {
  return db("schemes as sc")
    .join("steps as st", "sc.id", "st.scheme_id")
    .select(
      "sc.scheme_name",
      "st.step_number",
      "st.instructions",
      "sc.id"
    )
    .orderBy("st.step_number")
    .where('sc.id', id);
}

function add() {}
function remove(id) {}


// findSteps(id) {
//     return db('schemes as sc')
//       .join('steps as st', 'sc.id', 'st.scheme_id')
//       .select('sc.id', 'instructions', 'scheme_name', 'step_number')
//       .orderBy('st.step_number')
//       .where('sc.id', id);
//   }