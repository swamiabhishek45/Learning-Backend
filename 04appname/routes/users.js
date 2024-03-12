const mongoose = require('mongoose');

// create database in DB
mongoose.connect("mongodb://127.0.0.1:27017/practiceMDB");

// create documents in DB
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

// create collections in DB
module.exports = mongoose.model('User',userSchema);