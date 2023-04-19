//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

//connecting to mongodb database
mongoose.connect("mongodb://localhost:27017/churchesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('strictQuery', true);


//Defining Schema for database
const userSchema = {
  firstName: String,
  lastName: String,
  mother: String,
  father: String,
  address: String,
  gender: String,
  phone: Number,
  email: String,
  group: String
};

const messageSchema = {
  name: String,
  phone: String,
  email: String,
  message: String
};

const User = new mongoose.model("User", userSchema);
const Message = new mongoose.model("Message", messageSchema);

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/events", function(req, res) {
  res.render("events");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/sermon", function(req, res) {
  res.render("sermon");
});

app.get("/ministry", function(req, res) {
  res.render("ministry");
});

app.get("/sermon-single", function(req, res) {
  res.render("sermon-single");
});

app.get("/blog-single", function(req, res) {
  res.render("blog-single");
});

app.get("/churchservices1", function(req, res){
  res.render("churchservices1")
})

app.get("/churchservices2", function(req, res){
  res.render("churchservices2")
})

app.get("/churchservices3", function(req, res){
  res.render("churchservices3")
})

app.get("/register", function(req, res){
  res.render("register")
})

//Creating new Users
app.post("/register", function(req, res){

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mother: req.body.mother,
    father: req.body.father,
    address: req.body.address,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    group: req.body.group
  });
  newUser.save(function(err){
    if (err){
      console.log(err);
    }else{
      res.render("index");
    }
  });
});

//Sending Feedback Message from contact form.
app.post("/contact", function(req, res){

  const newMessage = new Message({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message
  });
  newMessage.save(function(err){
    if (err){
      console.log(err);
    }else{
      res.render("index");
    }
  });
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
