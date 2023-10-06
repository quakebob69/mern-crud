const { findAll, findByPk, create, updateBorrower, destroyBorrower, destroyLoan } = require("../service/loan.service");

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

/*
// Update a Loan by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;

  await update(req.body, id)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Loan with id=${id}. Maybe Loan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Loan with id=" + id
      });
    });
};
*/

// Update a Borrower 
exports.updateBorrower = async (req, res) => {
  const loanId = req.params.loanId;
  const borrowerId = req.params.borrowerId;

  res.send({
    message: "updateBorrower: loanId " + loanId + ", borrowerId " + borrowerId 
  });
};

// Delete a Borrower
exports.deleteBorrower = async (req, res) => {
  const loanId = req.params.loanId;
  const borrowerId = req.params.borrowerId;

  res.send({
    message: "deleteBorrower: loanId " + loanId + ", borrowerId " + borrowerId 
  });
};

// Delete a Loan (and its Borrowers)
exports.deleteLoan = async (req, res) => {
  const loanId = req.params.id;

  await destroyLoan(loanId)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Loan with id=${loanId}. Maybe Loan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Loan with id=" + loanId + ` (` + err + ').'
      });
    });
};
