"use strict";

var app = angular.module('apiApp');

app.controller("navController",["$scope", "$location", function($scope, $location){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }
}]);
