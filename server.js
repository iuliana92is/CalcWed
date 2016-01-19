var express = require('express'),  
    hbs     = require('express-hbs'),
    server  = express();

// set the view engine
server.set('view engine', 'hbs');

// configure view engine
server.engine('hbs', hbs.express3({  
  defaultLayout: __dirname + '/views/layouts/main.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));

// configure views path
server.set('views', __dirname + '/views');

server.get('/', function(req, res) {  
  var user = {
    name: 'Baseroom-Escape'
  }
  res.render('index', user);

});

server.listen(8000);
console.log("Serverasul a pornit cu portul:'8000'");  