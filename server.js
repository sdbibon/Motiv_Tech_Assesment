var express = require('express');
var app = express();
var fs = require("fs");

var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "password",
  database: "todoapp"  
});  



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  
  // Creating table
  //var sql = "CREATE TABLE todoapp.users (name VARCHAR (50) NOT NULL, password VARCHAR (50) NOT NULL,profession VARCHAR (50) NOT NULL,Id VARCHAR (50) NOT NULL);";  
  //con.query(sql, function (err, result) {  
  //if (err) throw err;  
  //console.log("Table created");  
  //});
  
  
  // update
  //var sql = "UPDATE todoapp.customer SET first_name = 'Alfred', last_name = 'Schmidt' WHERE visit_id = 2;";  
  //con.query(sql, function (err, result) {  
  //if (err) throw err;  
  //console.log("Table created");  
  //});

  
  // insert
  //var sql = "insert into todoapp.customer(visit_id,first_name,last_name) values(2,'john','don')";  
  //con.query(sql, function (err, result) {  
  //if (err) throw err;  
  //console.log("Table created");  
  //});
  

  con.query("SELECT * FROM todoapp.customer", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});  


var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
      
      console.log(JSON.stringify(data));
      
      const object1 = JSON.parse(JSON.stringify(data));
      
      console.log(Object.keys(object1))
      console.log(Object.values(object1))

      //const object2 = JSON.parse(JSON.stringify(Object.values(object1)));
      //console.log(Object.keys(object2))
      //console.log(Object.values(object2))

   });
})


var id = 3;

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 3];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})


var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})