var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';
mongodb.connect(url,function (err,db) {
    if(err){
        throw err;
    }
    console.log('Database Created !');
    //find only one
/*
    console.log("name Of User" );
   db.collection("user").findOne({},function (err,result) {
        if(err){
            throw err;
        }
        console.log(result.name);
        db.close();
    });
*/
    //find all user
/*
    console.log("array all Users" );
    db.collection("user").find({}).toArray(function (err,result) {
        if(err){
            throw err;
        }
        console.log(result);
        db.close();
    });
*/

   //find user = query
    /*var query = {age:"24"};
    console.log("array all Users age =24 \n" );
    db.collection("user").find(query).toArray(function (err,result) {
        if(err){
            throw err;
        }
        console.log(result);
        db.close();
    });
*/



    //find all users = query and sort
    var query = {name:-1};
    console.log("array all Users age =24 \n" );
    db.collection("user").find().sort(query).toArray(function (err,result) {
        if(err){
            throw err;
        }
        console.log(result);
        db.close();
    });




});
