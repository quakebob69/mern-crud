module.exports = (sequelize, Sequelize) => {
    const Borrower = sequelize.define("borrower", {
        pairId: {
            type: Sequelize.INTEGER
        },
        loanId: {
            type: Sequelize.INTEGER
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });

    return Borrower;
};