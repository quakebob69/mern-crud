module.exports = (sequelize, Sequelize) => {
    const Loan = sequelize.define("loan", {
        loanId: {
            type: Sequelize.INTEGER
        }
    });

    return Loan;
};