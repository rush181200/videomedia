const router = require("express").Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const verify = require("./verify/verifyToken")


//Update
router.put("/:id",verify, async (req,res)=>{
    const user = await User.findOne({ email: req.body.email });
    if(user){
        res.status(400).json("User Already exists")
      }else{
    if(req.user.id === req.params.id || req.user.isAdmin){
       if(req.body.password){
           req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
           
       }
       try{
           const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
           res.status(200).json(updateUser)
       }catch(e){
          res.status(500).json(e)
       }
    }else{
       res.status(403).json("You can still update only your account")
    } 
}   
})

//Delete
router.delete("/:id",verify, async (req,res)=>{
    
    if(req.user.id === req.params.id || req.user.isAdmin){
      
       try{
           const deleted = await User.findByIdAndDelete(req.params.id)
           
           res.status(200).json("User has been deleted")
       }catch(e){
          res.status(500).json(e)
       }
    }else{
       res.status(403).json("You can still delete only your account")
    
}   
})
//Get
router.get("/find/:id", async (req,res)=>{
    
   
      
       try{
           const user = await User.findById(req.params.id)
           const { password, ...info } = user._doc;
           res.status(200).json(user._doc)
       }catch(e){
          res.status(500).json(e)
       } 
})
//Get all
router.get("/",verify, async (req,res)=>{
    const query = req.query.new;
   if(req.user.isAdmin){
     
      try{
          const users = query? await User.find().limit(10) : await User.find();
          
          res.status(200).json(users)
      }catch(e){
         res.status(500).json(e)
      }
   }else{
      res.status(403).json("You are not allowed to see all users")
   
}   
})
//Get user stats
router.get("/stats",verify, async (req,res)=>{
   const today = new Date();
   const lastYear = today.setFullYear(today.setFullYear-1);

   const monthsArray = [
      January,
      Febuary,
      March,
      April,
      May,
      June,
      July,
      September,
      October,
      November,
      December,
   ];

   try{
      const data = await User.aggregate([
         {
            project:{
               month:{$month:"$createdAt"}
            },
         },
           { 
               $group : {
                  _id:"$month",
                  total:{$sum:1}
               }
            
         }
      ]);
      res.status(200).json(data)
   }catch(e){
      res.status(500).json(e)
   }
})

module.exports = router;

