var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.send("Hello there boy");
});
app.listen(3000,function(){
  console.log("Server started");
});
