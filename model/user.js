
var mongoose =require("mongoose");

var  Schema=  mongoose.Schema;


var obj = {
	name:String,
	email:String,
	password:String
}

var model = mongoose.model("user",new Schema(obj));
//model 这个对象，映射的是users  这张表

module.exports = model;
