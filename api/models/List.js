const moongose = require("mongoose");

const ListSchema = new moongose.Schema(
{
    title:{type:String, required: true, unique:true},
    type:{type:String,},
    genre:{type:String},
    content:{type:Array},
},

   { timestamps:true}

);

module.exports = moongose.model("List",ListSchema);