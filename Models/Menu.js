const mongoose=require('mongoose')

const menuSchema =mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number 
    },
    taste:{
        type:String,
        enum:["sweet","sour","spicey"]
    }
})

const Menu=mongoose.model("Menu",menuSchema);

// comment added for learning git command

module.exports=Menu;