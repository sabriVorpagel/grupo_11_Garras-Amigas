// modulos
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session'); 
const cors = require('cors'); 


// rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');
const admiRouter = require('./routes/admi');

// rutas apis

const apiUsersRoutes = require ('./routes/api/apiUsersRoutes');
const apiAuthRouter = require('./routes/api/apiAuth');
const apiProductsRoutes = require('./routes/api/apiProductsRoutes');


const {localsUserCheck, coockieCheck} = require('./middlewares/usersLogin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret : 'garrasAmigas',
  resave : false , 
  saveUnitialized : true }));

app.use(cors()); 

app.use(coockieCheck);
app.use(localsUserCheck);

app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/admi',admiRouter );

// rutas apis

app.use('/api/auth', apiAuthRouter);
app.use('/api/users', apiUsersRoutes);
app.use('/api/products', apiProductsRoutes);

app.use('/api/carts', require('./routes/api/apiCarts'));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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
