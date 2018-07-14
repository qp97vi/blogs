var express = require('express');
var router = express.Router();
var User = require("../model/user");
var md5= require("md5");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: '注册页面',isShow:false });
});


router.post("/",function(req,res){
	console.log(req.body);
	//查询数据是否有同名， 如果没有，插入数据库中
	//插入数据
	//
	User.find({
		email:req.body.email
	}).then(result=>{
		if(result.length==0){
			//插入数据
			return User.create({
					name:req.body.username,
					email:req.body.email,
					password:md5(req.body.password)
				})
		}else{
			res.render('register', { title: '注册页面',isShow:true });
		}
	}).then(result=>{
		//这个回调函数等待 create 的promise reslove 之后才会调用
		res.redirect("/login");
	})
	
})

module.exports = router;