const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("./verify/verifyToken")


//Create
router.post("/",verify, async (req,res)=>{
    if(req.user.isAdmin){
       const newMovie = new Movie(req.movie)
       try{
           const saveMovie = await newMovie.save()
           res.status(201).json(saveMovie)
       }catch(e){
          res.status(500).json(e)
       }
    }else{
       res.status(403).json("You are not allowed")
    } 
 
})

//Update
router.put("/:id",verify, async (req,res)=>{
    if(req.user.isAdmin){
     
       try{
           const updateMovie = await Movie.findByIdAndUpdate(req.params.id,{
            $set: req.body
           },{new:true})
           res.status(201).json(updateMovie)
       }catch(e){
          res.status(500).json(e)
       }
    }else{
       res.status(403).json("You are not allowed")
    } 
 
})

//Update
router.delete("/:id",verify, async (req,res)=>{
    if(req.user.isAdmin){
     
       try{
         await Movie.findByIdAndDelete(req.params.id)
           res.status(201).json("Deleted")
       }catch(e){
          res.status(500).json(e)
       }
    }else{
       res.status(403).json("You are not allowed")
    } 
 
})
//Get
router.get("/:id",verify, async (req,res)=>{
   
     
       try{
         const movie = await Movie.findById(req.params.id)
           res.status(201).json(movie)
       }catch(e){
          res.status(500).json(e)
       }
  
    })

    //Get Random
router.get("/random",verify, async (req,res)=>{
   
     const type = req.query.type;
     let movie;
    try{
        if(type ==="series"){
            movie = await Movie.aggregate([
                {$match:{isSeries: true}},
                {$sample :{size:1}},
            ])
        }else{
            movie = await Movie.aggregate([
                {$match:{isSeries: false}},
                {$sample :{size:1}},
            ])
        }
      
        res.status(201).json(movie)
    }catch(e){
       res.status(500).json(e)
    }

 })