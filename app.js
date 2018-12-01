var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home");
});

app.get("/campgrounds",function(req,res){
  res.send("Nuthan Chandra");
});
app.listen(3000,function(){
  console.log("Server started");
});
