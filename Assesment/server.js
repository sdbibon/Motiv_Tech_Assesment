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


/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  */
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

  /*
  // insert
  let s1 = "aniket"
  let s2 = "nikhilesh"

  var sql = "insert into todoapp.customer(visit_id,first_name,last_name) values(3,'" + s1 + "','" + s2 + "')";  
  con.query(sql, function (err, result) {  
  if (err) throw err;  
  console.log("Table created");  
  });
  */
  
  
  //var s = "john";
  //con.query("SELECT * FROM todoapp.customer WHERE first_name = '" + s + "'", function (err, result, fields) {
  //  if (err) throw err;
  //  console.log(result);
  //});

  /*
  for (let i = 0; i < 9; i++) {
      console.log(i);
  }
  const arr = [ 1, 2, 3 ];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
   }

  let i = 1;

  while (i < 10) {
   console.log(i);
   i++; 
  }
  
  // dictionary	
  var dict = {
  Name: "Eric",
  Age = 23
  Job: "Freelancer",
  Skills : "JavaScript"
}; 	

  */


 // con.query("SELECT * FROM todoapp.customer;", function (err, result, fields) {
 //   if (err) throw err;
    //console.log(result);
 // });

//});
  
var permissions = {
  
   "permissions1":
    {
       "id" : "1",
    "name": "project:read"
    },

    "permissions2":
    {
       "id" : "2",
    "name": "project:write"
    }
      

}


var roles = {

  "roles1": 
    {
       "id": "1",
       "team": "1",
       "name": "Editor",
       "permissions": ["1","2"],
       "users": ["1"]
}
}



var user = {
   "user3" : {
      "name" : "mohit",
      "teams" : ["1"],
      "roles" : ["1"],
      "id": 3
   },
    "user4" : {
      "name" : "lane",
      "teams" : ["3"],
      "roles" : ["2"],
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user3"] = user["user3"];
      
      console.log( data );
     
      res.end( JSON.stringify(data));
      
      console.log(JSON.stringify(data));
      
      const object1 = JSON.parse(JSON.stringify(data));
      
      console.log(Object.keys(object1))

      //console.log(Object.keys(object1)[0])

      console.log(Object.values(object1))
      console.log("new user added")
      //const object2 = JSON.parse(JSON.stringify(Object.values(object1)));
      //console.log(Object.keys(object2))
      //console.log(Object.values(object2))

   });
})

app.post('/assign_permission', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "permissions.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      console.log("add permissions");
      data["permissions1"] = permissions["permissions1"];
      
      console.log( data );
     
      res.end( JSON.stringify(data)); 
      

   });
})

app.post('/assign_roles', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "roles.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      console.log("add roles by user");
      data["roles1"] = roles["roles1"];
      
      console.log( data );
     
      res.end( JSON.stringify(data)); 
      

   });
})


var id = 3;

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 3];
      console.log("Delete user 3 this time");
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log("all users");
      console.log( data );
      res.end( data );
   });

})

app.get('/roles', function (req, res) {
   fs.readFile( __dirname + "/" + "roles.json", 'utf8', function (err, data) {
      console.log("all roles");
      console.log( data );
      res.end( data );
   });

})

app.get('/permissions', function (req, res) {
   fs.readFile( __dirname + "/" + "permissions.json", 'utf8', function (err, data) {
      
      console.log( data );
      res.end( data);
   });

})

app.get('/teams', function (req, res) {
   fs.readFile( __dirname + "/" + "teams.json", 'utf8', function (err, data) {
    
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