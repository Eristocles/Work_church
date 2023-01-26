//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index");
  res.sendFile(__dirname + "\views\contact.ejs");
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

app.post("/", function(req, res){
  console.log(req.body);
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
