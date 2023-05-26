const moongose = require("mongoose");

const MovieSchema = new moongose.Schema(
{
    title:{type:String, required: true, unique:true},
    desc:{type:String,},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    trailor:{type:String},
    video:{type:String},
    year:{type:String},
    limit:{type:Number},
    genre:{type:String},
    isSeries:{type:Boolean,default:false},
},

   { timestamps:true}

);

module.exports = moongose.model("Movie",MovieSchema);