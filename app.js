

// create an express app
const express = require("express");
const { Server } = require("https");
const app = express()


// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get('/test', function (req, res) {
  var http = require('http');
  var mysql = require('mysql')
   var con = mysql.createConnection({
     host   : 'localhost',
     user     : "RhyQi441sN",
     password : "k0AxLg3H0Q",
     database :"RhyQi441sN",
     host: 'remotemysql.com',
  });
  con.connect(function(err) {
    
  
      if (err) throw err;
      console.log("Connected!");
    });
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...."));