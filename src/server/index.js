const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const { createMockDB } = require('./utils/mockDB');

createMockDB();
setInterval(createMockDB, 3600000);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'));
app.use('/api', apiRouter);

app.listen(8080, () => console.log('Listening on port 8080!'));
