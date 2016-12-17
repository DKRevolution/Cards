var express = require('express');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.port || 3000));
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(app.get('port'), function(){
 console.log('server is listening port:' + app.get('port'));
});