const express = require("express");
const app = express();

// middleware
app.use((req, res, next) => {
  console.log("middlware is working");
  next();
});

// ejs
app.set("view engine", "ejs");

// static files 
app.use(express.static("./public"));

app.get("/ejs", (req, res, next) => {
  res.render("index", { age: 12 });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// whatever brower sends --> req
// whatever server sends --> res

// route
app.get("/", (req, res) => {
  res.send("Hello world from server");
});

app.get("/profile", (req, res) => {
  res.send("From Profile");
});

// dynamic routing
app.get("/profile/:username", (req, res) => {
  res.send(`Hello from ${req.params.username}`);
});

// error handling in express
app.get("/error", (req, res, next) => {
  throw Error("Something went wrong");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(404);
  res.render("error", { error: err });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
