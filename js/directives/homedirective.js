var app = angular.module("apiApp");
app.directive("homedirective", ["$scope", function($scope){
  return {
    restrict: "AE",
    templateUrl: "partials/home.html",
    replace: false,
  };
}]);
