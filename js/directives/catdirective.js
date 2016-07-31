"use strict";

var app = angular.module('apiApp');

app.directive("kittyGifs", function() {
  return {
    restrict: "AE",
    templateUrl: "partials/cat.html"
    replace: false,
  };
});
