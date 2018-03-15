var express = require('express');
var server = express();
var userRoutes=require('./controllers/user');
var insertRoutes =require('./controllers/insert');
//var authRoutes=require('./controllers/auth');
var session=require('express-session');
var flash =require('connect-flash');
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/MongoDataBase';


//////////////////////////////////////////////////
/*
server.use(session({
    secret:"@#%#$^$%",
    cookie:{maxAge:1000*60*60*7}
}));
*/

server.use(flash());
//server.use('/auth',authRoutes);
/*
server.use(function(req,resp,next){
    if(!(req.session.username&&req.session.password)){

        resp.redirect('/auth/login');
    }
    else{
        resp.locals={
            username:req.session.username
        }
        next();


    }
})
*/

server.use('/user',userRoutes);
server.use('/user',insertRoutes);
//server.use('/user',authRoutes);

server.use(express.static('public'));

server.set('view engine','ejs');
server.set('views','./views');
server.listen('9090',function () {
    console.log("starting..");
});





/*
mongodb.connect(url,function (err,db) {
   if(err){
       throw err;
   }
   console.log('Database Created !');
   /!*
   var info ={name:"Hossam Mahmoud",age:"23",job:"developer"};
    db.collection('user').insertOne(info,function (err,result) {
        if(err){
            throw err;
        }
        console.log('collection Created !');
        db.close();
    });
*!/
    db.close();
});

*/


/*

var express = require('express');
var server = express();
var authRoutes=require('./controllers/auth');
var postRoutes=require('./controllers/posts');
var session = require('express-session');
var flash = require('connect-flash');

*/

/*
server.use(session({
    secret:"@#%#$^$%",
    cookie:{maxAge:1000*60*60*24*7}

}));
server.use(flash());

server.use(function (req,res,next) {
    if(!(req.session.username  && req.session.pass)){
        res.redirect('/auth/login')
    }else {
        res.locals={
            name:req.session.username
        }
        next();
    }
});
server.use('/auth',authRoutes);
server.use('/post',postRoutes);

server.set('view engine','ejs');
server.set('views','./views');


server.listen('9090',function () {
    console.log("starting..");
})*/