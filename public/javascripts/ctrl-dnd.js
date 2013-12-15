//var dnd = angular.module('drag-and-drop', ['ngDragDrop']);
//
//dnd.controller('oneCtrl', function($scope, $timeout) {
//    $scope.list1 = [];
//
//
//
//    // Limit items to be dropped in list1
//    $scope.optionsList1 = {
//        accept: function(dragEl) {
//            if ($scope.list1.length >= 5) {
//                return false;
//            } else {
//                return true;
//            }
//        }
//    };
//});

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});