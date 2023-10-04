const db = require("../models");
const Loan = db.loans;

// Save Loan in the database
exports.create = async (loan) => {
    return Loan.create(loan, {
        include: ["borrowers"],
    })
};

module.exports.asdf2 = () => {
    const msg = "Message From Service 2";
    console.log(msg)
    return msg;
};





