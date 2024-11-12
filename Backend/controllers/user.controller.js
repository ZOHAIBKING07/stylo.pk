const User= require("../models/user.model")
const bcrypt= require("bcryptjs")
const Salt=10;
var jwt = require('jsonwebtoken');
const sendEmail=require("../Utilities/sendmail");
// const sendEmail = require("../Utilities/sendmail");



exports.store=async(req,res)=>{
    try{
        const { password } = req.body;
        const encryptedPassword=await bcrypt.hash(password,Salt)
        req.body.password=encryptedPassword;
        const randomNumber= Math. floor(Math. random() * (999999 -100000 + 1)) + 100000;

   const user=await User.create(req.body);

   user.code=randomNumber;
   user.save();
    const subject="Welcome To Stylo";
    const text=`This is a welcome message to greet you to come on our website.This is your verifacation Code ${randomNumber}`
    sendEmail(user.email,subject,text)
    // sendEmail(user.email)
       res.json({status:200,message:"User created successfully",user})

}
catch(err){
    console.log(err);
}

}


// exports.verifyUser = async (req, res, next) => {
//     try {
//         const { email } = req.query;
//         const { VerifyCode } = req.body;

//         console.log("Email:", email);
//         console.log("VerifyCode:", VerifyCode);

//         const user = await User.findOne({ email: email });
//         if (!user) {
//             return res.json({ message: "User not found" });
//         }

//         console.log("User found:", user);
//         console.log("User code:", user.code);

//         if (user.code && user.code.toString().trim() === VerifyCode.trim()) {
//             user.isEmailVerified = true;
//             await user.save();
//             return res.json({ message: "User Verified Successfully!" });
//         } else {
//             return res.json({ message: "Code is not correct" });
//         }
//     } catch (err) {
//         console.error("Error during verification:", err);
//         res.status(500).json({ message: "An error occurred.", error: err.message });
//     }
// };







exports.verifyUser=async(req,res,next)=>{
    try{
        const {email}=req.query;
        const {VerifyCode}=req.body;
const user=await User.findOne({email:email})
if(user.code===VerifyCode){
    console.log(user)
    user.isEmailVerified=true;
    user.code=null;
    user.save();
    console.log(user)
    // console.log("hello")
        }
     
        else{
            return res.json({message:"Code is not correct"})
        }
        res.json({message:"User Verified Successfully!"})
    }
    catch(err){
        console.log(err);
    }
}







// exports.login=async(req, res) => {
//     try{
//         // return res.json({message:"User Logged In Successfully"})
//         const {email,password}=req.body;
//         const user=await User.findOne({email:email})
//         if(user){
//             const comparePassword=await bcrypt.compare(password,user.password)
//             if(comparePassword){
//                 return res.json({message:"User Logged in successfully"})
//             }
//             else{
//                 return res.json({message:"Worng Credentials"})
//             }
//         }
//        res.json({status:200,message:"User created successfully", user })

// }
// catch(err){
//     console.log(err);
// }

// }


// in 3.8.24    1:4:40>>>>
exports.login=async(req, res) => {
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email})
        if(!user){
            return res.json({message:"User not Found",status:404,success:false})
        }
            const comparePassword=await bcrypt.compare(password,user.password)
            if(comparePassword){
                var token = jwt.sign({ id:user._id }, 'Abc12345');
                return res.json({message:"User Logged in successfully",success:true,status:200,token:token})
            }
            else{
                return res.json({message:"Password is wrong",success:false,status:404})
            }
        }
       
        catch(err){
            console.log(err);
        }

    }


// exports.index=async(req,res)=>{
//    try{
//        const {category}=req.query;
//        const query={};
//        if(category){
//            query.category=category;
//        }
//   const users=await User.find(query)
//       res.json({status:200,message:"User fetched successfully", users })

// }
// catch(err){
//    console.log(err);
// }

// }

exports.get=async(req,res)=>{
   try{
       const {id}=req.params;
  const user=await User.findOne({_id:id})
  if(!user){
       return res.json({status:404,success:false, message:`Couldn't find user`})
   }
      res.json({status:200,success:true, message:"Users fetched successfully",user})

}
catch(err){
   console.log(err);
}

}

// exports.destroy=async(req,res)=>{
//    try{
//        const {id}=req.params;
//   const user=await User.findOneAndDelete({_id:id})
//   if(!user){
//        return res.json({status:404,success:false, message:`Couldn't find user`})
//    }
//       res.json({status:200,message:"Users Delete successfully",})

// }
// catch(err){
//    console.log(err);
// }


// }


// exports.update=async(req,res)=>{
//    try{
//        const { id }=req.params;
//   const user=await User.findOneAndUpdate({_id:id},req.body,{new:true})
//   if(!user){
//        return res.json({status:404, success:false, message: `Couldn't find user`})
//    }
//       res.json({status:200,message:"Users updated successfully",})

// }
// catch(err){
//    console.log(err);
// }

// }