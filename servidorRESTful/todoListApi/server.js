var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  servidor ='mongodb://localhost:27017/tododb',
  consign = require('consign');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(servidor,{ useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var routes = require('./api/routes/todoListRoutes'); //importing route
// //routes(app); //register the route

//load('models', {cwd: 'api' });
consign({cwd: 'api'})
  // .then('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(port);

app.use(function(req, res) { 
    res.status(404).send({url: req.originalUrl + ' not found'})  
});

console.log('todo list RESTful API server started on: ' + port);

module.exports = app;