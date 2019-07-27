var express = require('express');
var db = require('./config/database');

var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var ispRoutes = require('./isp/isp.routes');
var path = require('path');
//Create express application
var app = express();

//port
const port = process.env.PORT || 8080;
//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization'
  );
  next();
});

//use express router
app.use('/api', router);

//call isp routing
ispRoutes(router);

// Point static path to dist
app.use(express.static(path.join(__dirname + '/dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// intialise server
app.listen(port, (req, res) => {
  console.log(`Server is running on ${port} port.`);
});
