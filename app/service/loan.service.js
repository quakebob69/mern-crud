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

// Find a loan
exports.findByPk = async (id) => {
    return Loan.findByPk(id, {
        include: ["borrowers"],
    })
};

//Update a Loan (and Borrowers)
exports.update = async (payload, id) => {
    return Loan.update(payload, {
        where: { loanId: id }
    })
};

// Delete a Loan (and Borrowers)
exports.destroy = async (id) => {
    return Loan.destroy({
        where: { loanID: id },
    })
};
