var app = angular.module("app", []);

app.controller("petsController", function ($scope, $http) {
    $http.get('/pets')
        .success(function (battle_info) {
            $scope.pets = battle_info
        })
});

//app.controller('dragController', function($scope) {
//    $scope.list1 = [];
//
//});