const tableName = "loan";

module.exports = (sequelize, Sequelize) => {
    const Loan = sequelize.define(tableName, {
        loanId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }, {
        timestamps: false
    });

    return Loan;
};