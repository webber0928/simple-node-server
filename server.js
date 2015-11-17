var express = require('express')
	,app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/www'));

app.listen(port);
console.log( port + ' is start!!' );


