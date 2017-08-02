var express = require('express');
var app = express();

// To server static files (html, css, js)
app.use(express.static(__dirname + '/public'));

// Templating set up
var engines = require('consolidate');
app.engine('html', engines.hogan);
app.set('views', __dirname + '/public/html');
app.set('view engine', 'html');

// Database set up
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://puzzles.db');

app.get("/", function(req, res) {
	res.render("index.html");
});

app.listen(process.env.PORT || 5000);
console.log("Server started. Listening.");
