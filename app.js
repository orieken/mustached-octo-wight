var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');


function getJsonData(callback) {
    var options = {
        host: 'us.battle.net',
        path: '/api/wow/character/firetree/Rieken?fields=pets'
    };

    http.request(options).on('response',function (response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            callback(JSON.parse(str));
        });
    }).end();
}

var app = express();

// all environments
app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/pets', function(request, response) {
    getJsonData(function (battle_info) {
        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify(battle_info.pets));
    });
});

http.createServer(app).listen(9000, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
