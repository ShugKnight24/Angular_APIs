"use strict";

var app = angular.module('apiApp');

app.factory("jennBadges",["$http", function($http) {
  return {
    data: function() {
      return $http.get("https://teamtreehouse.com/jenniferkron2.json");
    }
  };
}]);
