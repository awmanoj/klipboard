var express = require('express');
var app = express()
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app.get('/', function(req, res) {
	res.send('Work in progress');
});
app.listen(app.get('port'), function() {
	console.log('Server running: http://localhost:' + app.get('port'));
});
