
var http = require('http');
var express = require('Express');
var session = require('express-session'); 
//set the session key
var sess = { 
			secret: '1234567890QWERTY Keyboard cat', 
			 saveUninitialized: false,
             resave: false,
             cookie: {}};

var app = express();	
port = process.argv[2] || 8050;


if(app.get('env') === 'production'){
	app.set('trust proxy', 1);
	sess.cookie.secure = true;
}

app.configure(function () {
	app.use(session(sess));
	app.use("/",express.static('C:/workspace/locater'));
});

var server = http.createServer(app);
server.listen(port);
 
 

console.log("Express server running at http://localhost:"  + port + "/\nCTRL + C to shutdown");
