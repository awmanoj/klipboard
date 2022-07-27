var express = require('express');
var app = express()

config = require('./server/configure');

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

app.listen(app.get('port'), function() {
	console.log('Server running: http://localhost:' + app.get('port'));
});
