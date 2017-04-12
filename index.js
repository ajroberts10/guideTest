var express = require('express');
var nunjucks = require('nunjucks');
const path = require('path');
var app = express();

app.use(express.static('public'));

app.set('views', 'src/views');
app.use(express.static(__dirname + '/public'));

nunjucks.configure('./src/views', {
    autoescape: true,
    express: app,
    watch: true
});

var guideRouter = require('./src/routes/guideRoutes')();

app.use('/', guideRouter);

var port = 5001;

app.listen(port, function(error) {
    console.log('server running on port ' + port);
});