var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';
mongodb.connect(url,function (err,db) {
    if(err){
        throw err;
    }
    console.log('Database Created !');

    var info ={name:"tea"};
     db.collection('meal').remove(info,function (err,result) {
         if(err){
             throw err;
         }
         console.log('removed !');
         db.close();
     });

    db.close();
});
