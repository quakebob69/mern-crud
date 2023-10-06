const { findAll, findByPk, create, destroy } = require("../service/loan.service");

// Get all Loans
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

// Get a Loan
exports.findOne = async (req, res) => {
  const id = req.params.id;

  await findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Loan with loanId=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Loan with loanId=` + id + ` (` + err + ').'
      });
    });
};

// Add a new Loan (and Borrowers)
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

// Delete a Loan (and its Borrowers)
exports.delete = async (req, res) => {
  const loanId = req.params.id;

  await destroy(loanId)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Loan with loanId=${loanId}. Maybe Loan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Loan with loanId=" + loanId + ` (` + err + ').'
      });
    });
};
