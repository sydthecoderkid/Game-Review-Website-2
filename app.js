

// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.type('text/html');
  res.send('<h1>I am html</h1>');
  console.log("Check");
})

