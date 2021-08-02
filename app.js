

// create an express app
const express = require("express");
const { Server } = require("https");
const app = express()
var http = require('http');
var mysql = require('mysql');

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get('/test', function (req, res) {
   var con = mysql.createConnection({
     host   : 'localhost',
     user     : "RhyQi441sN",
     password : "k0AxLg3H0Q",
     database :"RhyQi441sN",
     host: 'remotemysql.com',
  });
  con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM GameReviews", function (err, result, fields) {
        if (err) throw err;
        changeHeader(result[0].Name);
      });
    });
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...."));


  function changeHeader(text){
    document.getElementById("header").innerHTML = text;
  }
 