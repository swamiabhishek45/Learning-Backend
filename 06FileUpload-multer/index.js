const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// parse incoming requests with url-encoded payloads
app.use(express.urlencoded({ extended: false })); 

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.post("/upload", upload.single("profileImg"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
