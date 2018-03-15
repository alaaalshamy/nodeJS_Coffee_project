var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var orders=new Schema({
name:String,
component:[Object],
notes:String,
room:{
    type:Number,
    ref:"Rooms"
},
totalprice:Number,
date:{
    type:Date,
    default:Date.now
},
status:String,
ext:Number,
user:{
  type:Number,
  ref:"users"
}
});
mongoose.model("orders",orders);
