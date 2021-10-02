var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
// var authenticate = require('./authenticate');
// var auth = require('./verify');
var cors = require('cors');

const url = 'mongodb://127.0.0.1:27017/Location';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

connect.then((db) => {
    console.log("Connected to Database. Server running on port: 4000");
}, (err) => { console.log(err); });

var indexRouter = require('./routes/index');
var longlatRouter = require('./routes/longlat');


var app = express();

app.use(logger('dev'));
app.use(express.json()); // same as bodyParser.json()
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('*', cors({
    origin: 'http://localhost:5500',
    credentials: true
}));
app.use('/', indexRouter);
app.use('/longlat', longlatRouter);

module.exports = app;
