const express = require("express");
const app = express();

// middleware
app.use((req, res, next) => {
  console.log("middlware is working");
  next()
});

// ejs
app.set('view engine', 'ejs');

app.get('/ejs', (req, res, next) => {
    res.render('index', {age: 12});
})

// whatever brower sends --> req
// whatever server sends --> res

// route
app.get("/", (req, res) => {
//   console.log(req);
  res.send("Hello world ok");
});

app.get("/profile", (req, res) => {
    res.send("From Profile");
})

// dynamic routing
app.get("/profile/:username", (req, res) => {
    res.send(`Hello from ${req.params.username}`)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

