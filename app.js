const createServer = require('./app/utils/server');
const cors = require("cors");

const port = 3000;
const isLocal = true;
var corsOptions = {
	origin: "http://localhost:8081"
};

const app = createServer();

app.use(cors(corsOptions));


const db = require("./app/models");
// drop the table if it already exists
db.sequelize.sync({ force: true })
	.then(() => {
		console.log("Drop and re-synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});


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

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});
