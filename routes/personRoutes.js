const express=require('express')
const router=express.Router();
const Person=require('./../Models/Person')

// Post route to add a person
router.post('/',async (req,res)=>{
    try{
    const data=req.body;  //  /person ya url endpoint var client data send kartoy , and body parser is parsing the data sent on this url and req.body madhe obj format madhe save hotay
    
    // creating a new row / document in the Person model
    // creating a instance   CREATE from CRUD
    const newPerson=new Person(data);

    // save the new person in the database // CREATE 
    const response=await newPerson.save();
    console.log("the data is saved");
    res.status(200).send("data save hogaya BC !!");

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
        
    }
    
})

// parameterized url
router.get("/:workType",async (req,res)=>{
    try{
        if(workType==="chef" || workType==="manager" || workType==="waiter"){
            const data=req.params.workType;
            const response=await Person.find({work:workType});
            res.status(200).json(response)
        }
        else{
            res.send("404, invalid parameter")
        }
        
    }
    catch(err){
        res.status(500).send(`error : ${err}`);
    }
})

router.get('/',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
        
    }
    catch(err){
         res.status(500).send(`error : ${err}`);
    }
    
})

// UPDATING the data of row using PUT method
router.put("/:id",async (req,res)=>{
    try{
        const personId=req.params.id; // extract the id from url parameter
        const dataSentByUser=req.body;  // extracting the data sent by client in body of req

        const response=await Person.findByIdAndUpdate(personId,dataSentByUser,{
            new:true,
            runValidators:true
        })

        if(!response){
            return res.status(404).json({error:"person not found"})
        }
        console.log("data updated");
        res.status(200).json(response)

    }catch(err){
         console.log(err);
         res.status(500).send('land jaisi kismat')
    }
})

// DELETING a row form the collection, for that we need to find the object id
// which will be sent by the client 
router.delete("/:id",async(req,res)=>{
   try{
    const id=req.params.id; // extracting the id form the url
    const response=await Person.findByIdAndDelete(id)

    if(!response){
        res.status(404).json({error:"person not found"})
    }
    res.status(200).send(`${id} deleted successfully`)

   }catch(err){
       res.status(500).send("internal server error bitch")
   }

})

module.exports=router;















