// http - yeh ek protocol jiske through data bhej sakta hain client to server over the internet // HTTP (HyperText Transfer Protocol) ek set of rules hai
// jiske through client (browser/app) aur server internet ke upar
// data request aur response ke form me communicate karte hain.

const http = require("http");

const server = http.createServer((req,res)=>{
    //routes -- url define krna jinpe kush ho
    console.log(req.url)
    if(req.url == "/test"){
        res.end("Test Page")
    } 
    else if(req.url == '/profile-page'){
        res.end("Profile page")
    }
    console.log("Server is running on port 3000")
    res.end("Server is running on port 3000");
});



server.listen(3000)