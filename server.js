
var express = require('express');
var app = express();
var mongojs = require('mongojs'); 
//declaim which module to use. : mongojs
var db = mongojs('contactlist', ['contactlist']);
//declaim which mongodb DB to use and collection to use.

app.use(express.static(__dirname+ "/angularJs50Examples"));

app.get('/contactlist', function(req, res){

	console.log('server received a REST request');

	person1 = {
        name: 'tim1',
        email: 'tim1@paypal.com',
        number: '1111111111'
	  };
	  person2 = {
	        name: 'tim2',
	        email: 'tim2@paypal.com',
	        number: '2222222222'
	  };
	  person3 = {
	        name: 'tim3',
	        email: 'tim3@paypal.com',
	        number: '3333333333'
	  };

	  var contactlist = [person1,person2,person3];
	  res.json(contactlist);
});


app.listen(3001);
console.log("server running on 3001");