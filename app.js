const createServer = require('./app/utils/server');
const port = 3000;
const app = createServer();

// drop the table if it already exists
const db = require("./app/models");
db.sequelize.sync({ force: true })
	.then(() => {
		console.log("Drop and re-synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});
