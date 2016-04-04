var express = require('express'),  
    hbs     = require('express-hbs'),
    server  = express();

var fs = require("fs");
var content = fs.readFileSync("assets/json/gallery.json");
var contentJSON =JSON.parse(content);



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
    server.engine('hbs', hbs.express3({
        defaultLayout: __dirname + '/views/layouts/main.hbs',
        partialsDir: __dirname + '/views/partials',
        layoutsDir: __dirname + '/views/layouts'
    }));
    res.render('index', contentJSON);

});

// server.get('/joker_room', function(req, res) {
//     server.engine('hbs', hbs.express3({defaultLayout:  __dirname + '/views/layouts/joker_room.hbs'}));
//    res.render('joker_room');
 
// });
 

server.listen(8888);
console.log("Serverul a pornit cu portul:'8888'");  
