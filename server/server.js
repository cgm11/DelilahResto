///////////////// Imports /////////////////
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const db = require('./db/db');
const routes = require('./routes/index');

///////////////// Set configurations /////////////////
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

///////////////// Start server /////////////////

// Syncronize database for creating the models if not exits
db
    .sync({ force: false })
    .then(() => {
        console.log("Database is ready.");
        app.listen(config.PORT, () => {
            console.log('Servidor iniciado');
        })
    })
    .catch((err) => {
        console.log(e);
        throw err;
    });
