const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'start.html'));
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Internall server error');
});

app.listen(config.port, config.host, () => {
	console.log(`Server is running on http://${config.host}:${config.port}`);
});
