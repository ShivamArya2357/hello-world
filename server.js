var express=require('express');
var path=require("path");
var bodyParser=require('body-parser');
var mongo=require("mongoose");

var db=mongo.connect('mongodb://localhost:27017/greetin', function(err,response){
	if(err){console.log(err);}
	else{ console.log('Connected to ' + db);}
});
var app=express();
/*
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencode({extended:true}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
*/
var Schema = mongo.Schema;
var UsersSchema = new Schema({
name: {type: String },
address: {type: String},
},{versionKey: false});

var model = mongo.model('users', UsersSchema);
var msg = new model({name: "first", address:"Hello World"});
msg.save(function(err) {
	if(err) throw err;
});

app.get("/",function(req,res){
	res.send(msg.address);
});
app.listen(5000);
/*
app.post("/api/SaveUser",function(req,res){
	var mod = new model(req.body);
	if(req.body.mode == "Save")
	{
		mod.save(function(err,data){
			if(err){
				res.send(err);
			}
			else
			{
				res.send({data:"Record has been Inserted..!!");
			}
		});
	}
	else
	{
		model.findByIdAndUpdate(req.body.id,{name: req.body.name, address: req.body.address},function(err,data) {
	if(err) {
		res.send(err);
	}
	else
	{
		res.send({data: "Record has been updated..!!"});
	}
});
}
})
app.post("/api/deleteUser", function(req,res){
	model.remove({_id: req.body.id},function(err) {
	if(err){
		res.send(err);
	}
	else
	{
		res.send({data:"Record has been Deleted..!!"});
	}
});
})

app.get("/api/getUser",function(req,res){
	model.find({},function(err,data){
		if(err){
			res.send(err);
		}
		else
		{
			res.send(data);
		}
	});
})

app.listen(8080, function() {
console.log('Example app listening on port 8080!')
})		
*/
