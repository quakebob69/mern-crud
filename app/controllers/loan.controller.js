const db = require("../models");
const Loan = db.loans;
//const Borrowers = db.borrowers;

// Create and Save a new Loan
exports.create = (req, res) => {
  // Validate request
  if (!req.body.loanId) {
    res.status(400).send({
      message: "loanId can not be empty!"
    });
    return;
  }

  // Create a Loan
  const loan = {
    loanId: req.body.loanId
  };

  // Save Loan in the database
  Loan.create(loan)
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

  Tutorial.findByPk(id)
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
        message: "Error retrieving Loan with id=" + id
      });
    });
};
