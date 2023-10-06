const tableName = "borrower";

module.exports = (sequelize, Sequelize) => {
    const Borrower = sequelize.define(tableName, {
        pairId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        loanId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        indexes: [
            { fields: ['pairId', 'loanId'], unique: true }
        ]
    });

    return Borrower;
};