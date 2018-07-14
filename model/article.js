
var mongoose =require("mongoose");

var  Schema=  mongoose.Schema;


var obj = {
	author:String,
	title:String,
	content:String,
	pathname:String
}

var model = mongoose.model("article",new Schema(obj));
//model 这个对象，映射的是articles  这张表

module.exports = model;
