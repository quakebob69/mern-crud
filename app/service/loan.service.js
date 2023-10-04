const db = require("../models");
const Loan = db.loans;

// Save a Loan
exports.create = async (loan) => {
    return Loan.create(loan, {
        include: ["borrowers"],
    })
};

// Retrieve all Loans
exports.findAll = async (req, res) => {
    return Loan.findAll({
        include: ["borrowers"],
    })
};

// Find a single loan
exports.findByPk = async (loanID) => {
    return Loan.findByPk(loanID, {
        include: ["borrowers"],
    })
};
