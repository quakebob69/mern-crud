const express = require("express");
const loanRoutes = require("../routes/ltk/loan.routes");
const routes = require("../routes/ltk");

function createServer() {
    const app = express();

    app.use(express.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));

    loanRoutes(app);
    routes(app);

    return app;
}

module.exports = createServer;
