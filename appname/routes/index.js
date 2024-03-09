var express = require("express");
const userModel = require("./users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// mongodb setup
// create
router.get("/user", async (req, res) => {
  const createdUser = await userModel.create({
    username: "swamiabhishek45",
    name: "Abhishek Swami",
    age: 21,
  });

  res.send(createdUser);
});

// read
router.get("/allusers", async (req, res) => {
  const allUsers = await userModel.find();
  // const allUsers = await userModel.findOne({username: "swamiabhishek45"}); // if not matched --> null
  res.send(allUsers);
  console.log(allUsers);
});

// delete
router.get("/delete", async (req, res) => {
  // const deleteUser = await userModel.delete()
  const deleteUser = await userModel.findOneAndDelete({
    username: "swamiabhishek45",
  });

  res.send(deleteUser);
});

// session setup
// create session
router.get("/session", (req, res) => {
  req.session.ban = true;
  res.render("index", { title: "Express" });
});

// read session
router.get("/checkban", (req, res) => {
  // console.log(req.session);
  if (req.session.ban === true) {
    res.render("banned");
  } else {
    res.send("not banned");
  }
});

// destroy session
router.get("/removeban", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("ban removed");
  });
});

// cookie setup
// create cookie
router.get("/cookie", (req, res) => {
  res.cookie("password", 482003);
  res.send("See cookie settings");
});

// read cookie
router.get("/readcookie", (req, res) => {
  console.log(req.cookies.password);
  res.send("Read cookie settings");
});

// clear cookie
router.get("/clearcookie", (req, res) => {
  res.clearCookie("password");
  res.send("Clear cookie");
});
module.exports = router;
