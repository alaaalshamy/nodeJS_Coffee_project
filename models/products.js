
var mongoose=require("mongoose");
var mongoosePaginate=require("mongoose-paginate");
var schema=mongoose.schema;
var products=new mongoose.Schema({
  _id:Number,
  name:String,
  category:{
    type:String,
    ref:"category"
},
  price:Number,
  picture:String,
});
products.plugin(mongoosePaginate);
//register---mapping----
mongoose.model("products",products);


/*var products=new Schema({
  name:String,
  price:Number,
  category:{
      type:String,
      ref:"category"
  },
  image:String
  });*/