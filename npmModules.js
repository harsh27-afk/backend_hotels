let fs=require('fs');
let os=require('os');

let user=os.userInfo()  // returns an obj
console.log(user);

fs.appendFile("greet.txt","this is content",()=>{
    console.log("greet file is created!")
})
