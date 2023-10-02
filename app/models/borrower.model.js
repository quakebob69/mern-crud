module.exports = (sequelize, Sequelize) => {
    const Borrower = sequelize.define("borrower", {
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
        timestamps: false
    });

    return Borrower;
};