///////////////// Imports /////////////////
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const db = require('./db');
const routes = require('./routes/index');

///////////////// Set configurations /////////////////
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

///////////////// Start server /////////////////
app.listen(config.PORT, () => {
    console.log('Servidor iniciado');
    // Syncronize database for creating the models if not exits
    db
        .sync({ force: false })
        .then(() => {
            console.log("Database is ready.");
        })
        .catch((err) => {
            throw err;
        });
})