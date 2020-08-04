import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
	return res.json([
		{ name: 'Lucas', age: 24 },
		{ name: 'Bruno', age: 24 },
	]);
});

app.listen(3333);
