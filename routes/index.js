var http = require('http');
/*
 * GET home page.
 */



//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};
//
//exports.helloworld = function(req, res){
//    res.render('helloworld', {title: 'Hello, World!'});
//};
//
//exports.battle_pets = function(db){
//    return function(req, res) {
//        var collection = db.get('char_info');
//        collection.find({}, {}, function(e, docs){
//            res.render('battle_pets', {
//                "battle_pets" : docs
//            });
//        });
//    };
//};

function getJsonData(callback) {
    var options = {
        host: 'us.battle.net',
        path: '/api/wow/character/firetree/Bisbot?fields=pets'
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


exports.index = function (request, response) {
    getJsonData(function (battle_info) {
        console.log(battle_info);
        response.render('index', {
            "battle_info": battle_info
        });
    });
};