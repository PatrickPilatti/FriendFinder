//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = ('express');

var PORT = 3000;

app.use(bodParser.json());
app.use(bodyParser.urlencoded(extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, funtion(){
	console.log("listening on PORT: " + PORT);
});

