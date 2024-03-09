var express = require("express");
const userModel = require("./users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

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

module.exports = router;
