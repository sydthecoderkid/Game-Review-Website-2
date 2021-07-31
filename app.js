

// create an express app
const express = require("express")
const app = express()


// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get('/test', function (req, res) {
  var http = require('http');
  var mysql = require('mysql')
   var con = mysql.createConnection({
     host   : '85.10.205.173',
     port     :  3306,
     user     : "sydthecoderkid",
     password : "2022918055",
     database :"gamereviews"
  });
  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...."));