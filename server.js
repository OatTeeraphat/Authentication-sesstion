//base path dir
global.__base = __dirname + '/';
var config = require(__base + 'mongo_config');

// set up ======================================================================
var express  = require('express');
var app      = express();
var port 	 = process.env.PORT || config.host.PORT;
//var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');//use log activity.
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//var configDB = require('./config/database.js');

var router = express.Router(); // ROUTES FOR OUR API

// configuration ===============================================================
var con = require('./mongocon.js')();
//mongoose.connect(configDB.url); // connect to database
var User     = require('./app/models/user');

require('./config/passport')(passport); // js for config Passport

// Middle-ware Lib. ===============================================================
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({// required for passport
	secret: process.env.SEESION_SECRET || 'oatlikeme',
	resave : false,
	saveUnintitialized : false,
	})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes configured passport

// service ======================================================================
// for testAPI for our platfrom

require('./app/service.js')(router);
app.use('/api', router);

// launch ======================================================================
app.listen(port);
console.log('good@ localhost:' + port);
