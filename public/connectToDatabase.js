

var http = require('http');
var mysql = require('mysql')
 var con = mysql.createConnection({
   host   : '85.10.205.173',
   port     :  3306,
   port     :  80,
   user     : "sydthecoderkid",
   password : "2022918055",
   database :"gamereviews"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
 