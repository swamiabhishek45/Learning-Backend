var express = require("express");
var router = express.Router();

const userModel = require("./users");

const passport = require("passport");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

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

// intermediate mongodb
// router.get("/create", async function (req, res) {
//   const userData = await userModel.create({
//     username: "abhika",
//     nickname: "abhi",
//     description: "I am a abhishek of the swami family!",
//     categories: ["Js", "React", "Node", "Express", "MongoDB"],
//   });
//   res.send(userData);
// });

// router.get("/users", async function (req, res) {
//   // let regx = new RegExp("^Abhika$", "i"); // ^ - starting, $ - ending
//   // const users = await userModel.find({ username: regx });

//   const users = await userModel.find({
//     categories: {
//       $all: ["Express"],
//     },
//   });

//   res.send(users);
// });

// authentication & authorization

router.get("/profile", isLoggedIn, (req, res) => {
  res.send("Welcome to profile")
})

router.post("/register", function(req, res) {
  var userdata = new userModel({
    username: String,
    secret: String
  })

  userModel.register(userdata, req.body.password)
      .then(function(registerreduser){
        passport.authenticate("local")(req, res, function(){
          res.redirect("/profile");
        })
      })
});


router.post("/login",passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
}), function(req, res) {

})

router.get("/logout", function(req, res,next) {
  req.logOut(function(err) {
    if(err) return next(err);
    res.redirect("/")
  })
})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/")
}

module.exports = router;
