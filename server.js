var express = require("express");
var chalk = require("chalk");
var morgan = require("morgan");
var path = require("path");
const firebase = require("firebase");
require("firebase/firestore");

var app = express();

app.use(morgan("tiny"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/", "/index.html"));
});

app.listen(3000, function() {
  console.log(`listening on port ${chalk.green(3000)}`);
});
