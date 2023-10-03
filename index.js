const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const isLocal = true;

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// drop the table if it already exists
db.sequelize.sync({ force: true })
	.then(() => {
		console.log("Drop and re-synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

require("./app/routes/ltk/loan.routes")(app);

app.get('/', (req, res) => {
	res.json({
		message: "✨ 👋🌏 ✨",
		stage: process.env.NODE_ENV,
	});
});

app.get("/ping", (req, res) => {
	res.json({
		message: "🏓",
	});
});

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
