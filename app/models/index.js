const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const loanModel = require("./loan.model.js")
const borrowerModel = require("./borrower.model.js")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.loans = loanModel(sequelize, Sequelize);
db.borrowers = borrowerModel(sequelize, Sequelize);

db.loans.hasMany(db.borrowers, { foreignKey: 'loanId' });

module.exports = db;