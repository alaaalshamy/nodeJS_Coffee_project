var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bodyParserMid = bodyParser.urlencoded;
var mongodb = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/MongoDataBase';
router.get('/insert',function(req,resp){
    console.log("inside insert ");
});

module.exports =router;


// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// var bodyParserMid = bodyParser.urlencoded;
//
// router.get('/insert',bodyParserMid ,function(req,resp){
//     var username = "Hossam";//req.body.user
//     console.log("inside insert");
//     console.log(req.body);
// });
//
//
// module.exports =router;