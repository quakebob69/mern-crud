const express = require("express");
const routes = require("../routes/ltk");
const loanRoutes = require("../routes/ltk/loan.routes");
const borrowerRoutes = require("../routes/ltk/borrower.routes");

function createServer() {
    const app = express();

    app.use(express.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));

    routes(app);
    loanRoutes(app);
    borrowerRoutes(app);

    return app;
}

module.exports = createServer;
