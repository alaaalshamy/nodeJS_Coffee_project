var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bodyParserMid = bodyParser.urlencoded;
var mongodb = require('mongodb').MongoClient;
flash = require('connect-flash');
var url = 'mongodb://localhost:27017/MongoDataBase';

// table order name:orders
router.get('/lists',function(req,resp){
    console.log(req.query);
    var quer=req.query;
    // console.log(quer.Msg[0]);
    // console.log(quer.Msg[1]);
    // console.log(quer.Msg[2]);
    // console.log(quer.Msg[3]);
    // console.log(quer.Msg[4]);
    mongodb.connect(url,function (err,db) {

        if (err) {
            throw err;
        }
        console.log("conected Db");

        var query = {orderItem: quer.Msg[0],orderRoom:quer.Msg[1],orderTotal:quer.Msg[2],date:quer.Msg[3],status:0,process:0,Notes:quer.Msg[4]};
        db.collection('orders').insertOne(query,function (err,result) {
            if(err){
                throw err;
            }
            console.log('collection Created !');
        });
        db.close();


    });});

router.get('/list',function(req,resp){
    var username = "Hossam";//req.body.username;
    mongodb.connect(url,function (err,db) {

        if (err) {
            throw err;
        }
        console.log("conected Db");

        var query = {name: -1};
        db.collection("meal").find().sort(query).toArray(function (err, result) {
            if (err) {
                throw err;
            }

            console.log(result);
            resp.locals={
                user:username,
                resultsmeal:result
            }
            resp.render('users/list');

        });
        db.close();
    });


});



router.get('/login',function(req,resp){
    //msg: req.flash("msg")
//    resp.render('users/login',{msg: "Login"}) ;

});


router.post('/login',bodyParserMid,function(req,resp){
    var username=req.body.username;
 //   var password=req.body.password;

    });







//    var user=mongoose.model('user');
//  console.log(user);




router.get('/register',function(req,resp){
    resp.render('user/register') ;
});

module.exports =router;


