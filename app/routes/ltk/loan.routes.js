module.exports = app => {
  const loans = require("../../controllers/loan.controller");

  var router = require("express").Router();

  // Get all Loans
  router.get("/", loans.findAll);

  // Get a Loan
  router.get("/:id", loans.findOne);

  // Add a new Loan (and Borrowers)
  router.post("/", loans.create);

  //Update a Borrower 
  router.patch("/:loanId/borrower/:borrowerId", loans.updateBorrower);

  // Delete a Borrower
  router.delete("/:loanId/borrower/:borrowerId", loans.deleteBorrower);

  // Delete a Loan (and its Borrowers)
  router.delete("/:id", loans.deleteLoan);

  app.use('/api/loans', router);
};
