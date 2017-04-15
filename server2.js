var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
       res.end("Tu sam!");
});
app.get('/user/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse(data);
	   console.log(data);
       var user = users["user" + req.params.id] 
       res.end( JSON.stringify(user));
   });
});

app.delete('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse(data);
       delete users["user" + 2];
       res.end( JSON.stringify(users));
   });
});

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	   console.log(data);
       var users = JSON.parse(data);
       console.log("yuS");
       res.end( JSON.stringify(users) );
   });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

});