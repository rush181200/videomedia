const router = require("express").Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken')

// Register

router.post("/register",async (req,res)=>{
    const user = await User.findOne({ email: req.body.email });

    if(user){
      res.status(400).json("User Already exists")
    }else{
    const pass = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:pass
    });
    try{
        const user = await newUser.save(); //
        res.status(200).json(user)
    }
    catch(e){
        res.status(500).json(e)
    }}
   
});


router.post("/login", async (req, res) => {
    try {
    
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong password or username!");
      
    var decrypted = CryptoJS.AES.decrypt(user.password, 'Secretkey').toString(CryptoJS.enc.Utf8);
        console.log(decrypted)

      decrypted !== req.body.password &&
        res.status(401).json("Wrong password or username!");
  
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
  
      const { password, ...info } = user._doc;
  
      res.status(200).json({...info,accessToken});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router ;