var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var port = 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', path.join( __dirname, './views'));
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);

app.listen(port, function(){
  console.log(`Listening on port : ${port}.`)
});
