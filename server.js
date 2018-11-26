var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Set app equal to express middleware function
var app = express();

// Define root directory + home directory (/public in this case, index.html is default).  
// Use the following format: app.use(express.static(root, [options]));
// Advanced usage: http://www.senchalabs.org/connect/proto.html#app.use
app.use(express.static(__dirname + '/public'));

// Load body-parser middleware function
app.use(bodyParser.urlencoded({
    extended: false
}));

// Load method-override middleware function
app.use(methodOverride('_method'));

// Register the handlebars template engine with Express
app.engine('handlebars', exphbs ({
    defaultLayout: 'main'
}))

// Set the view engine to use - handlebars is used in this app
app.set('view engine','handlebars');

// Reference routes.js in the controllers directory
var routes = require('./controllers/routes.js');
app.use('/', routes);


var port = 3000;
app.listen(port);






