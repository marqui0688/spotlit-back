const knex = require("knex")(require("../knexfile"));
const crypto = require("crypto");

exports.index = (req, res) => {
  knex("auditions")
    .then((data) => res.status(200).json(data))
    .catch((error) => console.error(error));
};

exports.addAudition = (req, res) => {
  const newAudition = { ...req.body, id: crypto.randomUUID() };
  knex("auditions")
    .insert(newAudition)
    .then((_data) => {
      res.status(201).json(newAudition);
    })
    .catch((error) => console.error(error));
};

// exports.addAudition = (req, res) => {
//   console.log(req.body);
//   knex("auditions")
//     .insert(req.body)
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((error) => console.error(error));
