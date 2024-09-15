const express=require('express')
const router=express.Router();
const Menu=require('./../Models/Menu')

// Post route to add menu information
router.post("/",async (req,res)=>{
    try{
       const data=req.body;

       // creating a new row
       const menuItem=new Menu(data);

       const response=await menuItem.save()
       res.status(200).send("menu row added in the db")
    }
    catch(err){
          res.status(500).send(`error: ${err}`);
    }
})

// GET route to get the menu data 
router.get("/",async (req,res)=>{
    try{
       const data=req.body;

       const response=await Menu.find();
       res.status(200).json(response)
    }
    catch(err){
        res.status(500).json({error:err});
    }
})

router.get("/:tasteType",async (req,res)=>{
    try{
         const data=req.params.tasteType;
         if(data==="sweet" || data==="sour" || data==="spicey"){
              const response=await Menu.find({taste:data})
              res.status(200).json(response);
         }
         else{
            res.status(404).send("u have invalid demands, get a life lil bro")
         }
    }
    catch(err){
        res.status(500).json({error:err});
    }
})




module.exports=router;