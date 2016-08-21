"use strict";

var app = angular.module('apiApp');

app.directive("shugsBadges", function() {
  return {
    restrict: "AE",
    templateUrl: "partials/shug.html",
    replace: false
  };
});
