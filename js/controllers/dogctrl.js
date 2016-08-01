"use strict";

var app = angular.module('apiApp');

app.controller('dogCtrl',["$scope", "dogeGifs", function($scope, dogeGifs){
	dogeGifs.data().then(function(response){
    $scope.dogs = response.data.data;
  });
}]);
