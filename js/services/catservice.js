"use strict";

var app = angular.module('apiApp');

app.factory("catGifs",["$http", function($http) {
  return {
    data: function() {
      return $http.get("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC");
    }
  };
}]);
