var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var port = 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// tell the express app to listen on port 3000
var server = app.listen(3000, function() {
	console.log("listening on port 3000");
})
//we're going to have /routes/index.js handle all of our routing
var route = require('./routes/index.js')(app, server);
