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
// routing for server static content
    server.use('/assets', express.static(__dirname + '/assets'));
//
// configure views path
server.set('views', __dirname + '/views');

server.get('/', function(req, res) {  
  var user = {
    name: 'Baseroom-Escape'
  }
  res.render('index', user);

});

server.listen(1234);
console.log("Serverul a pornit cu portul:'1234'");  

