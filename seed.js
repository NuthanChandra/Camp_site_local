var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/camping_site");
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

var User= require("models/user.js");
var campgrounds=[
  {
    name: "Kipling Camp",
    image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/Tsomoriri.jpg",
    description: "Kip jip lip"
  },
  {
    name: "Nandi hills",
    image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/camp-exotica.jpg",
    description: "Awesome place in karnataka"
  },
  {
    name: "Rushikesh",
    image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/rishikesh-valley.jpg",
    description: "very good place in up"
  }
];
User.create(campgrounds,function(err,campground){
  if(err){
    console.log("Creating campgrounds failed");
  }
    else{
      console.log("Saved campgrounds",campground);
    }
});

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
