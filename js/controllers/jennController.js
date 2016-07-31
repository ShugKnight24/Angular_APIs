"use strict";

var app = angular.module('apiApp');

app.controller('jennController',["$scope","jennBadges", function($scope, jennBadges){
  jennBadges.data().then(function(response){
    $scope.badges = response.data.badges;
    });
}]);
