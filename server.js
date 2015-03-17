//https://www.youtube.com/watch?v=kHV7gOHvNdk
var express = require('express');
var app = express();

app.use(express.static(__dirname+ "/angularJs50Examples"));

app.listen(3000);
console.log("server running on 3000");