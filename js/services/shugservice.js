"use strict";

var app = angular.module('apiApp');

app.factory("shugBadges",["$http", function($http) {
  return {
    data: function() {
      return $http.get("https://teamtreehouse.com/shugmishumunov.json");
    }
  };
}]);
