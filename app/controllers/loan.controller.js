const { create, findAll, findByPk, destroy } = require("../service/loan.service");

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
exports.findAll = async (req, res) => {
  await findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loans" + ` (` + err + ').'
      });
    });
};

// Find a single loan with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  await findByPk(id)
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

// Delete a Loan with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  await destroy(id)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Loan with id=${id}. Maybe Loan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Loan with id=" + id + ` (` + err + ').'
      });
    });
};
