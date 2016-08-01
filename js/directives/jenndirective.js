"use strict";

var app = angular.module('apiApp');

app.directive("jennsBadges", function() {
  return {
    restrict: "AE",
    templateUrl: "partials/jenn.html",
    replace: false
  };
});
