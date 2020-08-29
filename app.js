var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

//Database conection
const databaseUrl = "mongodb://localhost:27017/appDataBase";
const databaseOptions = {
  useNewParser: true
};

mongoose.connect(databaseUrl, databaseOptions);
mongoose.connection.on("open", function(){
  console.log("MongoDB connection opened")
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const operationsRouter = require('./routes/operations');
const productsRouter = require('./routes/products.routes');
const servicesRouter = require('./routes/services.routes')
const appointmentRouter = require('./routes/appointment.routes');
const pokemonRouter = require('./routes/pokemon.routes');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/operations', operationsRouter);
app.use('/product', productsRouter);
app.use('/pokemon', pokemonRouter);
app.use('/appointment', appointmentRouter);
app.use('/services', servicesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
