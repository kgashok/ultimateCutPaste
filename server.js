// server.js
// where your node app starts
// init project

// Eating out and Express JS - read the analogy
// https://medium.freecodecamp.org/going-out-to-eat-and-understanding-the-basics-of-express-js-f034a029fb66

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// Step 1 Hiring the manager
var express = require('express');
var app = express();

// Step 2 Got shirt and shoes? 
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //console.log('Request: ', req); 
  //console.log('Response: ', res); 
  next();
});

// Step 3 Taking an order
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response, next) {
  //response.send("Hello World");
  response.sendFile(__dirname + '/views/index.html');
});

// Step 4 Open for Business 
// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
