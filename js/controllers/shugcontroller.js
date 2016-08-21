"use strict";

var app = angular.module('apiApp');

app.controller('shugController',["$scope","jennBadges", function($scope, shugBadges){
  shugBadges.data().then(function(response){
    $scope.badges = response.data.badges;
    // $scope.badges.forEach(function(item, index){
    //   $scope.earned_date = $scope.badges[index].earned_date.slice(0, 9);
    // });
    });
}]);
