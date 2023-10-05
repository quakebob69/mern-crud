const tableName = "loan";

module.exports = (sequelize, Sequelize) => {
    const Loan = sequelize.define(tableName, {
        loanId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        someThing1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        someThing2: {
            type: Sequelize.STRING,
            allowNull: false
        },
        someThing3: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Loan;
};