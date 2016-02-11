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

server.get('/joker_room', function(req, res) {
    server.engine('hbs', hbs.express3({defaultLayout:  __dirname + '/views/layouts/joker_room.hbs'}));
    res.render('joker_room');

});
 

server.listen(1234);
console.log("Serverul a pornit cu portul:'1234'");  

// var express = require('express'),  
//     hbs     = require('express-hbs'),
//     server  = express();

// var fs = require("fs");
// var content = fs.readFileSync("assets/json/gallery.json");
// var contentJSON =JSON.parse(content);
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : '< MySQL username >',
//   password : '< MySQL password >',
//   database : '<your database name>'
// });

// connection.connect();

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... nn");    
// } else {
//     console.log("Error connecting database ... nn");    
// }
// });

// connection.end();

// // set the view engine
// server.set('view engine', 'hbs');

// // configure view engine
// server.engine('hbs', hbs.express3({  
//   defaultLayout: __dirname + '/views/layouts/main.hbs',
//   partialsDir: __dirname + '/views/partials',
//   layoutsDir: __dirname + '/views/layouts'
// }));
// // routing for server static content
//     server.use('/assets', express.static(__dirname + '/assets'));
// //
// // configure views path
// server.set('views', __dirname + '/views');

// server.get('/', function(req, res) {
//     server.engine('hbs', hbs.express3({
//         defaultLayout: __dirname + '/views/layouts/main.hbs',
//         partialsDir: __dirname + '/views/partials',
//         layoutsDir: __dirname + '/views/layouts'
//     }));
//     connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
//         connection.end();
//         if (!err){
//             console.log('The solution is: ', rows);
//         }
//         else{
//             console.log('Error while performing Query.');
//         }
//     });
    
//     res.render('index', contentJSON);

// });

// server.get('/joker_room', function(req, res) {
//     server.engine('hbs', hbs.express3({defaultLayout:  __dirname + '/views/layouts/joker_room.hbs'}));
//     res.render('joker_room');

// });

// server.listen(1234);
// console.log("Serverul a pornit cu portul:'1234'");  

