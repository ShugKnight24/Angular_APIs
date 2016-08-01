"use strict";

var app = angular.module('apiApp');

app.directive("dogeGifs", function() {
  return {
    restrict: "AE",
    templateUrl: "partials/dog.html"
    replace: false,

  };
});
