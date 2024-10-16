const mongoose=require("mongoose");

const connectdb=async()=>{
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDb Connected Successfully");
}

module.exports=connectdb;