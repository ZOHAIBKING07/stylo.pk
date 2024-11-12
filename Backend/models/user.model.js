const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    age:{type:String},
    password:{type:String,required:true},
    country:{type:String},
    phone:{type:String},
    code:{type:String},
    isEmailVerified:{type:Boolean,default:false}
 }

)
module.exports = mongoose.model('User',userSchema)