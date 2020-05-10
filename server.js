const express = require('express');
const connectDatabase = require('./config/database');
const path = require('path');

const app = express();

connectDatabase();

app.use(
	express.json({
		extended: false,
	})
);

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/events', require('./routes/events'));
app.use('/api/flashcards', require('./routes/flashcards'));
app.use('/api/subTodos', require('./routes/subTodos'));

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`SUCCESS! ... Listening on port ${port}`);
});
