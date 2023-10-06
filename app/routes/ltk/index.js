module.exports = app => {
    var router = require("express").Router();

    router.get('/', (req, res) => {
        res.json({
            message: "✨ 👋🌏 ✨",
            stage: process.env.NODE_ENV,
        });
    });

    router.get("/ping", (req, res) => {
        res.json({
            message: "🏓",
        });
    });

    app.use('/', router);
};
