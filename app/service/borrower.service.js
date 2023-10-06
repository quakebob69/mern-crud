const db = require("../models");
const Borrower = db.borrowers;

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
