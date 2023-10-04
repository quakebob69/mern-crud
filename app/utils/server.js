const express = require("express");
const routes = require("../routes/ltk/loan.routes");

function createServer() {
    const app = express();

    app.use(express.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));

    routes(app);

    return app;
}

module.exports = createServer;
