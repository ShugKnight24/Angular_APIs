"use strict";

var app = angular.module('apiApp');

app.controller('catCtrl',["$scope", "catGifs", function($scope, catGifs){
	catGifs.data().then(function(response){
    $scope.cats = response.data.data;
  });
}]);
