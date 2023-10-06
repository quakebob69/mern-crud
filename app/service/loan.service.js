const db = require("../models");
const Loan = db.loans;

// Get all Loans
exports.findAllLoans = async (req, res) => {
    return Loan.findAll({
        include: ["borrowers"],
    })
};

// Get a Loan
exports.findLoanByPk = async (id) => {
    return Loan.findByPk(id, {
        include: ["borrowers"],
    })
};

// Add a new Loan (and Borrowers)
exports.createLoan = async (loan) => {
    return Loan.create(loan, {
        include: ["borrowers"],
    })
};

// Delete a Loan (and its Borrowers)
exports.destroyLoan = async (id) => {
    return Loan.destroy({
        where: { loanID: id },
    })
};
