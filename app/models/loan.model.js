module.exports = (sequelize, Sequelize) => {
    const Loan = sequelize.define("loan", {
        loanId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }, {
        timestamps: false
    });

    return Loan;
};