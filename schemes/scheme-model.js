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
    .select("sc.scheme_name", "st.step_number", "st.instructions", "sc.id")
    .orderBy("st.step_number")
    .where("sc.id", id);
}

async function add(scheme) {
  const [id] = await db("schemes").insert(scheme);
  return db("schemes").where({ id }).first();
}

async function remove(id) {
  const scheme = await db("schemes").where({ id }).first();
  if (!scheme) return Promise.resolve(null);
  await db("schemes").where({ id }).del();
  return Promise.resolve(scheme);
}

// findSteps(id) {
//     return db('schemes as sc')
//       .join('steps as st', 'sc.id', 'st.scheme_id')
//       .select('sc.id', 'instructions', 'scheme_name', 'step_number')
//       .orderBy('st.step_number')
//       .where('sc.id', id);
//   }
