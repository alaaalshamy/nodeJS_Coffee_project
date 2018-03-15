var mongoose=require('mongoose');
var mongoosePaginate=require('mongoose-paginate');
var Schema=mongoose.Schema;
var users=new Schema({
name:String,
email:String,
password:String,
room:Number,
ext:Number,
image:String
});

mongoose.model("users",users);