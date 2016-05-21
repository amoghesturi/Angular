var app = angular.module('filterApp', []);

app.filter([], function() {
  return function(r) {
    if(r.verificationstatus != 'VERIFIED') {

    }
  }
})

app.controller('resultsTableController', ['$scope', '$http', function($scope, $http) {
  $scope.heading = 'All Users';


  $http.get("http://localhost:3000")
   .then(function (response){
     $scope.results = response.data;
    // console.log(response.data);
   });
}]);
