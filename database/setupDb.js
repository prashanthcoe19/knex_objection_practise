const knex = require("knex");

const knexfile = require("./knexfile");
const { Model } = require("objection");

const setupDB = () => {
  const db = knex(knexfile.development);
  Model.knex(db);
};

module.exports = setupDB;
