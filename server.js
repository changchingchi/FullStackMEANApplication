
var express = require('express');
var app = express();


app.use(express.static(__dirname+ "/angularJs50Examples"));

app.get('/', function(req, res){

	res.send("hello world from server.js");
});


app.listen(3001);
console.log("server running on 3001");