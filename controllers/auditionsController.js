const knex = require("knex")(require("../knexfile"));

exports.index = (req, res) => {
  knex("auditions")
    .then((data) => res.status(200).json(data))
    .catch((error) => console.error(error));
};
