const mongoose = require("mongoose");
const Schema = mongoose.Schema
const writesSchema = new Schema({
    title:String,
    body:String,
    numberOfLikes:Number,
    numberOfComments:Number,
    dateOfUpload:String,
    writerId:Number,
    collectionId:Number
})
const Write = mongoose.model("write",writesSchema)
module.exports  = Write