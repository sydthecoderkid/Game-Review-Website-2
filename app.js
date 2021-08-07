

// create an express app
const express = require("express");
const { Server } = require("https");
const app = express()
var http = require('http');
var mysql = require('mysql');

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get('/getdata', function (req, res) {

   var con = mysql.createPool({
     host   : 'localhost',
     user     : "RhyQi441sN",
     password : "k0AxLg3H0Q",
     database :"RhyQi441sN",
     host: 'remotemysql.com',
     
  });

  con.getConnection(function(err, connection) {
         if (err) throw err;
        con.query("SELECT * FROM GameReviews", function (err, result, fields) {
          if (err) throw err;
          res.send(result[0]);
           
        });
    });

   
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...."));

 