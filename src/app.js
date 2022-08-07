const express = require('express');
const dotenv = require('dotenv');
const cors = require('./middleWares/cors');
const logger = require('./middleWares/logger');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

dotenv.config();
const { PORT = 3000, API_URL = 'http://localhost' } = process.env;
const app = express();

mongoose
  .connect('mongodb://localhost:27018/mydb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((error) => handleError(error));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use('/', cors);
app.use('/', logger);
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
