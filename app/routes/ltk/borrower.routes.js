module.exports = app => {
  const borrowers = require("../../controllers/borrower.controller");

  var router = require("express").Router();

  //Update a Borrower 
  router.patch("/:loanId/borrower/:pairId", borrowers.update);

  // Delete a Borrower
  router.delete("/:loanId/borrower/:pairId", borrowers.delete);

  app.use('/api/loans', router);
};
