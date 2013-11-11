var http = require('http');
/*
 * GET home page.
 */

var options = {
    host: 'us.battle.net',
    path: '/api/wow/character/firetree/Bisbot?fields=pets'
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
    res.render('helloworld', {title: 'Hello, World!'});
};

exports.battle_pets = function(db){
    return function(req, res) {
        var collection = db.get('char_info');
        collection.find({}, {}, function(e, docs){
            res.render('battle_pets', {
                "battle_pets" : docs
            });
        });
    };
};

exports.pets = function(request, response){
    callback = function (response) {
        var str = '';
        var jpar = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            jpar = JSON.parse(str);
//            console.log(jpar);
//            console.log(jpar.pets.collected[0]);
        });
    };
    http.request(options, callback).end();
    response.render('pets');
};