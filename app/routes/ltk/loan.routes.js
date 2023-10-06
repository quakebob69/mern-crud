module.exports = app => {
  const loans = require("../../controllers/loan.controller");
  const borrowers = require("../../controllers/borrower.controller");

  var router = require("express").Router();

  // Get all Loans
  router.get("/", loans.findAll);

  // Get a Loan
  router.get("/:id", loans.findOne);

  // Add a new Loan (and Borrowers)
  router.post("/", loans.create);

  //Update a Borrower 
  router.patch("/:loanId/borrower/:pairId", borrowers.update);

  // Delete a Borrower
  router.delete("/:loanId/borrower/:pairId", borrowers.delete);

  // Delete a Loan (and its Borrowers)
  router.delete("/:id", loans.delete);

  app.use('/api/loans', router);
};
