var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rankingsRouter = require('./routes/rankings');
var analyzeData =  require('./routes/analyzeData');
var mapRouter = require('./routes/maps');
var adminRouter = require('./routes/admin');

var app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rankings', rankingsRouter);
app.use('/analyzedata', analyzeData);
app.use('/map', mapRouter);
app.use('/admin', adminRouter);

module.exports = app;
