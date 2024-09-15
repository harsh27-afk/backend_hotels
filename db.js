const mongoose = require('mongoose')

const mongoURL='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


// mongoose maintains an obj via which it performs operations 
const db=mongoose.connection

db.on('connected',()=>{
    console.log("connected to db server")
})

db.on('disconnected',()=>{
    console.log(" connection broken ")
})

db.on('error',(err)=>{
    console.log('error ocurred is:' , err);
    
})

module.exports=db;









