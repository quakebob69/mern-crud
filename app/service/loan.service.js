const db = require("../models");
const Loan = db.loans;

// Get all Loans
exports.findAll = async (req, res) => {
    return Loan.findAll({
        include: ["borrowers"],
    })
};

// Get a Loan
exports.findByPk = async (id) => {
    return Loan.findByPk(id, {
        include: ["borrowers"],
    })
};

// Add a new Loan (and Borrowers)
exports.create = async (loan) => {
    return Loan.create(loan, {
        include: ["borrowers"],
    })
};

// Delete a Loan (and its Borrowers)
exports.destroy = async (id) => {
    return Loan.destroy({
        where: { loanID: id },
    })
};
