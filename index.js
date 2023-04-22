
// document.querySelector("button").addEventListener("click",function handleClick(){
//     alert("I got clicked!!!");
//     var audio=new Audio('Sweet.mp3');
//     audio.play()});
// document.getElementsByClassName("button1").click();
//    var loveScore=Math.random()*100;
//    loveScore=Math.floor(loveScore)+1;
//    alert("Your loveScore is " + loveScore);

// Create a node server to host the website
// npm init -y
// npm install express
// npm install body-parser
// npm install request

// Path: index.js

const express=require("express");
const bodyParser=require("body-parser");
var path = require('path');

// const request=require("request");
const app=express();
app.use(express.static(path.resolve('./public')));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});