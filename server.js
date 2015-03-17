//https://www.youtube.com/watch?v=kHV7gOHvNdk
var express = require('express');
var app = express();

<<<<<<< HEAD
app.use(express.static(__dirname+ "/angularJs50Examples"));
=======
app.get('/', function(req, res){

	res.send("hello world from server.js");
});
>>>>>>> e66b48dce157e8b3ad07bcdd5b4dd84236951ab2

app.listen(3000);
console.log("server running on 3000");