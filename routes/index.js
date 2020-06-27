///////////////// Imports /////////////////
const express = require('express');
const productRouter = require('../routes/productsRouter');
const signInRouter = require('../routes/signinRouter');
const loginRouter = require('../routes/loginRouter');

///////////////// Set configurations /////////////////
const app = express();

///////////////// Endpoints /////////////////
app.use('/products', productRouter);
app.use('/signin', signInRouter);
app.use('/login', loginRouter);

module.exports = app;