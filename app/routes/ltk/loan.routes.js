module.exports = app => {
  const loans = require("../../controllers/loan.controller");

  var router = require("express").Router();

  // Get all Loans
  router.get("/", loans.findAllLoans);

  // Get a Loan
  router.get("/:id", loans.findOneLoan);

  // Add a new Loan (and Borrowers)
  router.post("/", loans.createLoan);

  //Update a Borrower 
  router.patch("/:loanId/borrower/:pairId", loans.updateBorrower);

  // Delete a Borrower
  router.delete("/:loanId/borrower/:pairId", loans.deleteBorrower);

  // Delete a Loan (and its Borrowers)
  router.delete("/:id", loans.deleteLoan);

  app.use('/api/loans', router);
};
