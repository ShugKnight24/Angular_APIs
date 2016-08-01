"use strict";

var app = angular.module('apiApp');

app.factory("dogeGifs",["$http", function($http) {
  return {
    data: function() {
      return $http.get("http://api.giphy.com/v1/gifs/search?q=doge&api_key=dc6zaTOxFJmzC");
    }
  };
}]);
