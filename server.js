//https://www.youtube.com/watch?v=kHV7gOHvNdk
var express = require('express');
var app = express();

app.get('/', function(req, res){

	res.send("hello world from server.js");
});

app.listen(3000);
console.log("server running on 3000");