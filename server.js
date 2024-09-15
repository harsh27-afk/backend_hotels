const express=require('express');
const app=express() // its like we are creating an instance of express powers
const db=require('./db')

const bodyParser=require('body-parser');


app.use(bodyParser.json())
// body parser is a middleware of express
// client sends data in body of the url
//this data can be in any form , json, form, encoded,etc
//body parser helps us to parse the received data in an object, use .json() or .somrthing() depending on what format client is sending the data
//gives it in : - req.body in object format
// if client sent data in url encoded format , we would have used: app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res){
    console.log(req);  // this line prints nothing
    console.log("hi there"); // this as well
        
    res.send("you are on home page")
})

app.get('/login',  (req,res)=>{
    res.send("you are on login page")
})

// Import the router files
const personRoutes=require("./routes/personRoutes")

const menuRoutes=require("./routes/menuRoutes")

app.use('/person',personRoutes);

app.use('/menu',menuRoutes);


app.listen(3000, ()=>{
    console.log("server zinda hai 3000 pe")
})  // humara server is on 3000 port (flat no.)