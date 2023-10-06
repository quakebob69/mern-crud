const { update, destroy } = require("../service/borrower.service");

//Update a Borrower 
exports.update = async (req, res) => {
  const loanId = req.params.loanId;
  const pairId = req.params.pairId;

  await update(req.body, loanId, pairId)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Borrower was updated successfully!"
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
exports.delete = async (req, res) => {
  const loanId = req.params.loanId;
  const pairId = req.params.pairId;

  await destroy(loanId, pairId)
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
