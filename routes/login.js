var express = require('express');
var router = express.Router();
var User = require("../model/user");
var md5= require("md5");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面',isShow:false });
});
  

router.post("/",function(req,res){

	User.find({
		email:req.body.email,
		password:md5(req.body.password)
	}).then(result=>{

		if(result.length==0){

			res.render('login', { title: '登录页面',isShow:true });
		}else{

			req.session.kerwinInfo = result[0];
			res.cookie("currentUser",result[0].name)
			res.redirect("/index");
		}
	})
})
module.exports = router;