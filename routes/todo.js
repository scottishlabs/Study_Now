const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Get all todos');
});

router.post('/', (req, res) => {
	res.send('Add todo');
});

router.put('/:id', (req, res) => {
	res.send('Update todo');
});

router.delete('/:id', (req, res) => {
	res.send('Delete todo');
});

module.exports = router;
