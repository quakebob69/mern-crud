const { findAllLoans, findLoanByPk, createLoan, destroyLoan } = require("../service/loan.service");
const { updateBorrower, destroyBorrower } = require("../service/borrower.service");

// Get all Loans
exports.findAllLoans = async (req, res) => {
  await findAllLoans()
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
exports.findOneLoan = async (req, res) => {
  const id = req.params.id;

  await findLoanByPk(id)
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
exports.createLoan = async (req, res) => {
  // Validate request
  if (!req.body.loanId) {
    res.status(400).send({
      message: "loanId can not be empty!"
    });
    return;
  }

  // Save Loan in the database
  await createLoan(req.body)
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

//Update a Borrower 
exports.updateBorrower = async (req, res) => {
  const loanId = req.params.loanId;
  const pairId = req.params.pairId;

  await updateBorrower(req.body, loanId, pairId)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Borrower was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Borrower with loanid=${loanId} and pairId=${pairId}. Maybe Borrower was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Borrower with loanId=" + loanId + " and pairId=" + pairId + ` (` + err + ').'
      });
    });
};

// Delete a Borrower
exports.deleteBorrower = async (req, res) => {
  const loanId = req.params.loanId;
  const pairId = req.params.pairId;

  await destroyBorrower(loanId, pairId)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Borrower was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Borrower with loanid=${loanId} and pairId=${pairId}. Maybe Loan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Borrower with loanId=" + loanId + " and pairId=" + pairId + ` (` + err + ').'
      });
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
