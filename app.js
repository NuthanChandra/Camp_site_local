var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Campground = require("./models/campground.js");

mongoose.connect("mongodb://127.0.0.1/camping_site");
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});

app.get("/campgrounds",function(req,res){
  res.render("campgrounds/index",{campgrounds:campgrounds});
});

app.listen(3000,function(){
  console.log("Server started");
});
