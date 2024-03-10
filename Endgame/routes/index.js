var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

// flash cards
// router.get('/failed', function(req, res) {
//   req.flash("age", 21)
//   res.send("Flash card message")
// });
// router.get('/checkkaro', function(req, res) {
//   console.log(req.flash('age'));

// });

router.get("/create", async function (req, res) {
  const userData = await userModel.create({
    username: "abhika",
    nickname: "abhi",
    description: "I am a abhishek of the swami family!",
    categories: ["Js", "React", "Node", "Express", "MongoDB"],
  });
  res.send(userData);
});

router.get("/users", async function (req, res) {
  // let regx = new RegExp("^Abhika$", "i"); // ^ - starting, $ - ending
  // const users = await userModel.find({ username: regx });

  const users = await userModel.find({
    categories: {
      $all: ["Express"],
    },
  });

  res.send(users);
});

module.exports = router;
