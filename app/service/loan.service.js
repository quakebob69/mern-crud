const db = require("../models");
const Loan = db.loans;
const Borrower = db.borrowers;

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

//Update a Borrower 
exports.updateBorrower = async (payload, loanid, pairid) => {
    return Borrower.update(payload, {
        where: [{ loanId: loanid }, { pairId: pairid }],
    })
};

// Delete a Borrower
exports.destroyBorrower = async (loanid, pairid) => {
    return Borrower.destroy({
        where: [{ loanId: loanid }, { pairId: pairid }],
    })
};

// Delete a Loan (and its Borrowers)
exports.destroyLoan = async (id) => {
    return Loan.destroy({
        where: { loanID: id },
    })
};
