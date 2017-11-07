import express      from 'express'
import bodyParser   from 'body-parser'
import cors         from 'cors'
import config       from 'config'
import dotenv       from 'dotenv'
import morgan       from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()


if(config.util.getEnv('NODE_ENV') !== 'test') {
  //use morgan to log at command line
  app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

app.use(cors({origin: config.CORS , credentials: config.CORS_CREDEN}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//Defining Routes.
let routes = require('./routes/routes')();
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = config.util.getEnv('NODE_ENV') === 'development' || config.util.getEnv('NODE_ENV') === 'test' ? err : {};
  console.log("Error message: ", err.message)
  // render the error page
  res.status(err.status || 500)
  res.json({ message: "api error", status: err.status })
});

module.exports = app;
