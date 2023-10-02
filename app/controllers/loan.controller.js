const db = require("../models");
const Loan = db.loans;
//const Borrowers = db.borrowers;

// Create and Save new Loans
exports.createLoan = (loan) => {
  return Loan.create({
    loanId: loan.loanId
  })
    .then((loan) => {
      console.log(">> Created loan: " + JSON.stringify(loan, null, 4));
      return loan;
    })
    .catch((err) => {
      console.log(">> Error while creating loan: ", err);
    });
};

// Retrieve all Loans from the database.
exports.findAllLoans = (req, res) => {
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

