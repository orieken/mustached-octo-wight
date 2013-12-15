var http = require('http');

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
        response.render('index', {
            "battle_info": battle_info
        });
    });
};