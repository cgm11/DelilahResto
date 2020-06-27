///////////////// Imports /////////////////
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const config = require('./config/config');

///////////////// Set configurations /////////////////
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

///////////////// Start server /////////////////
app.listen(config.PORT, () => {
    console.log('Servidor iniciado');
})