const express = require('express');
const connectDatabase = require('./config/database');

const app = express();

connectDatabase();

app.use(
	express.json({
		extended: false,
	})
);

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to the Study Now Prototype' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/events', require('./routes/events'));
app.use('/api/flashcards', require('./routes/flashcards'));
app.use('/api/subTodos', require('./routes/subTodos'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`SUCCESS! ... Listening on port ${port}`);
});
