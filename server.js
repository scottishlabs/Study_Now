const express = require("express");
const connectDatabase = require("./config/database");

const app = express();

connectDatabase();

app.use(
	express.json({
		extended: false
	})
);

app.get("/", (req, res) => {
	res.json({ msg: "Welcome to the Study Now Prototype" });
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todo", require("./routes/todo"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
