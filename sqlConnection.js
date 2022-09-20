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

  con.query("SELECT * FROM todoapp.customer", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});  