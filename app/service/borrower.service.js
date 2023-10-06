const db = require("../models");
const Borrower = db.borrowers;

//Update a Borrower 
exports.update = async (payload, loanid, pairid) => {
    return Borrower.update(payload, {
        where: [{ loanId: loanid }, { pairId: pairid }],
    })
};

// Delete a Borrower
exports.destroy = async (loanid, pairid) => {
    return Borrower.destroy({
        where: [{ loanId: loanid }, { pairId: pairid }],
    })
};
