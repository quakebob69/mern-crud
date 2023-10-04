const { create, asdf2 } = require("../service/loan.service.js");
const db = require("../models");
const Loan = db.loans;

// Create and Save a new Loan
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.loanId) {
    res.status(400).send({
      message: "loanId can not be empty!"
    });
    return;
  }

  // Save Loan in the database
  await create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Loan."
      });
    });
};

// Retrieve all Loans from the database.
exports.findAll = (req, res) => {
  Loan.findAll({
    include: ["borrowers"],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loans."
      });
    });
};

// Find a single loan with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Loan.findByPk(id, {
    include: ["borrowers"],
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Loan with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Loan with id=` + id + ` (` + err + ').'
      });
    });
};
