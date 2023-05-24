const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use((req,res,next)=>{console.log("hello"), next()});
app.get("/",(req,res)=>res.send("Hello Node"))
// after this action i want to add some "use" , add next in this function
app.get("/action",(req,res,next)=>{res.sendFile(path.join(__dirname,"Home.html")),next()});

app.use((req,res,next)=>console.log("end"))

app.get("/about",(req,res)=>res.send("This is the about page"));


app.listen(4000,()=>console.log("started"));