
var express = require('express');
var app = express();
var mongojs = require('mongojs'); 
//declaim which module to use. : mongojs
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-Parser');
//declaim which mongodb DB to use and collection to use.

app.use(express.static(__dirname+ "/angularJs50Examples"));
app.use(bodyParser.json());
app.get('/contactlist', function(req, res){

	console.log('server received a REST request');
	  db.contactlist.find(function(err, docs){
	  	console.log(docs);
	  	res.json(docs);
	  });
});

app.post('/contactlist', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err,doc){
		//doc meaning the data we parsed and received.
		res.json(doc);
	})
});
app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
	 console.log('id :'+id+' is ready for removal');
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err,doc){
		//doc meaning the data we parsed and received.
		res.json(doc);
	})
});

app.get('/contactlist/:id', function(req , res){
	var id = req.params.id;
	console.log('id' +id+ "is ready for GET request.");
	db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.put('/contactlist/:id',function(req,res){
	var id = req.params.id;
	console.log("put id: "+id+" is ready for PUT request");
	db.contactlist.findAndModify({query:{ _id: mongojs.ObjectId(id)},
		update : {$set : {name: req.body.name, email : req.body.email, number: req.body.number}},
		new : true}, function(err, doc){
			res.json(doc);
		});
});


app.listen(3001);
console.log("server running on 3001");