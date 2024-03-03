const mongoose=require("mongoose")
const Schema=mongoose.Schema
const SalleSchema=new Schema({
nom:{
    type:String,
    required:true
},
disponibilté:{
    type:Boolean,
    required:true,
    default:false
},
capacité:{
    type:Number
},
equipement:{
    type:String
},
description:{type:String}

})
module.exports = mongoose.model('Salle',SalleSchema) 