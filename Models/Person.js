const mongoose=require('mongoose')

const personSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","manager","waiter"],  // work can only have these 3 values now
        required:true
    },
    mobile:{
        type:String,
    },
    email:{
        type:String,
        unique:true,  // make sures that the column email will have only unique email ids throughout the table 
        required:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }

})

// create a person model , now sara db interaction iske through hoga
const Person=mongoose.model('Person',personSchema);
// reference           //model name  // schema used

// we can give 3rd paameter to above function, it will represent the table
// name  
// if not given it pluralizes

// we are exporting the reference
module.exports=Person;

