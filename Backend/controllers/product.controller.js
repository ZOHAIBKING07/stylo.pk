// const Product = require("../models/product.model");

// exports.store = async (req, res) => {
//     try {
//         // Log the request body
//         console.log(req.body); 

//         // Create the product using the request body
//         const product = await Product.create(req.body);
        
//         // Send success response
//         res.json({ status: 200, message: "Product created successfully", product });
//     } catch (err) {
//         console.log(err);
//         // Send error response
//         res.status(500).json({ status: 500, message: "An error occurred", error: err.message });
//     }
// };


const Product=require ("../models/product.model")


exports.store = async (req, res) => {
    try {
        // Check if req.file exists and assign the filename to the thumbnail field
        if (req.file) {
            req.body.thumbnail = req.file.filename;
        } else {
            return res.status(400).json({ status: 400, message: "Thumbnail is required." });
        }

        // Ensure that title is also present
        if (!req.body.title) {
            return res.status(400).json({ status: 400, message: "Title is required." });
        }

        console.log(req.body); // Log the full request body for debugging

        const product = await Product.create(req.body);
        res.json({ status: 200, message: "Product created successfully", product });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 500, message: "Internal server error", error: err.message });
    }
};


//  exports.store = async (req, res) => {
//      try{
//         // req.body.title=req.file.filename;
//         // req.body.thumbnail=req.file.filename;
//         console.log(req.file.filename)
//         // console.log(req,body)
//         // console.log("Shahzaib javed")
//     const product=await Product.create(req.body)
//         res.json({status:200,message:"Product created successfully",product})

//  }
//  catch(err){
//      console.log(err);
//  }

//  }

 exports.index=async(req,res)=>{
    try{
        const {category}=req.query;
        const query={};
        if(category){
            query.category=category;
        }
      

   const Products=await Product.find(query);


       res.json({status:200,message:"Products fetched successfully",Products})

}
catch(err){
    console.log(err);
}

}

//  exports.index=async(req,res)=>{
//     try{
//         const {category,search}=req.query;
//         console.log(search)
//         const query={};
//         if(category){
//             query.category=category;
//         }
//         if(search){
//             query.title=search;
//         }

//    const Products=await Product.find(query);


//        res.json({status:200,message:"Products fetched successfully",Products})

// }
// catch(err){
//     console.log(err);
// }

// }

exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
   const product=await Product.findOne({_id:id})
   if(!product){
        return res.json({status:404,success:false, message:`Couldn't find product`})
    }
       res.json({status:200,message:"Products fetched successfully",product})

}
catch(err){
    console.log(err);
}

}

exports.destroy=async(req,res)=>{
    try{
        const {id}=req.params;
   const product=await Product.findOneAndDelete({_id:id})
   if(!product){
        return res.json({status:404,success:false, message:`Couldn't find product`})
    }
       res.json({status:200,message:"Products Delete successfully",})

}
catch(err){
    console.log(err);
}


}


exports.update=async(req,res)=>{
    try{
        const { id }=req.params;
   const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
   if(!product){
        return res.json({status:404, success:false, message: `Couldn't find product`})
    }
       res.json({status:200,message:"Products updated successfully",})

}
catch(err){
    console.log(err);
}

}




// exports.index=async(req,res)=>{
//     try{
      
//     const product=await Product.find(req.body)
//         res.json({status:200, message:"Products fetched successfully",products});

// }
// catch(err){
//     console.log(err)
//     res.status(500).json({ status: 500, message: "Server error" }); 
// }

// }

// exports.get=async(req,res)=>{
//     try{
//        const{id}=req.params;
//        console.log(id)
//     const product=await Product.findOne({_id:id})
//     if(!product){
//         return res.json({status:404,success:false, message:`Couldn't find product`})
//     }
//         res.json({status:200,message:"Products fetched successfully",products})

// }
// catch(err){
//     console.log(err)

// }

// }





















// ai maded

// const Product = require("../models/product.model");

// exports.store = async (req, res) => {
//     try {

//         const product = await Product.create(req.body);
//         res.json({ status: 200, message: "Product created successfully", product });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "Error creating product" });
//     }
// };

// exports.index = async (req, res) => {
//     try {
//         const products = await Product.find(); // Fetch all products
//         res.json({ status: 200, message: "Products fetched successfully", products });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "Error fetching products" });
//     }
// };

// exports.get = async (req, res) => {
//     try {
//         const { id } = req.params; // Get the product ID from params
//         const product = await Product.findOne({ _id: id }); // Find the product by ID
//         if (!product) {
//             return res.status(404).json({ status: 404, success: false, message: "Couldn't find product" });
//         }
//         res.json({ status: 200, message: "Product fetched successfully", product }); // Return the product
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "Error fetching product" });
//     }
// };


