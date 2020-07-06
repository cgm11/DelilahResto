///////////////// Imports /////////////////
const express = require('express');
const productRouter = require('./productsRouter');
const usersRouter = require('./users');
const loginRouter = require('./loginRouter');
const ordersRouter = require('./ordersRouter');

///////////////// Set configurations /////////////////
const app = express();

///////////////// Endpoints /////////////////
app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/orders', ordersRouter);

module.exports = app;