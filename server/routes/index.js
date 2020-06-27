///////////////// Imports /////////////////
const express = require('express');
const productRouter = require('./productsRouter');
const signInRouter = require('./signinRouter');
const loginRouter = require('./loginRouter');

///////////////// Set configurations /////////////////
const app = express();

///////////////// Endpoints /////////////////
app.use('/products', productRouter);
app.use('/signin', signInRouter);
app.use('/login', loginRouter);

module.exports = app;