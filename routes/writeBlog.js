var express = require('express');
var router = express.Router();
var Article = require("../model/article");
var md5= require("md5");
/* GET home page. */
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"public/kerwinphoto");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('writeBlog', { title: '发表页面',isShow:false,isNew:true });
});
   

router.post("/",upload.single('kerwinphoto'),function(req,res){

	console.log(req.file);

	Article.create({
		// author:req.session.kerwinInfo["name"],
		author:req.cookies["currentUser"],
		title:req.body.title,
		content:req.body.content,
		// pathname:`/kerwinphoto/${req.file.filename}`
	}).then(result=>{
		res.redirect("/index");
	})
})  
 


module.exports = router;