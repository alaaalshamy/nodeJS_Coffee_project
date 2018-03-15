var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/MongoDataBase';
mongodb.connect(url,function (err,db) {
    if(err){
        throw err;
    }
    console.log('Database Created !');


    var info ={name:"ALaa",password:"12345"};
     db.collection('user').insertOne(info,function (err,result) {
         if(err){
             throw err;
         }
         console.log('collection Created !');
         db.close();
     });

});
