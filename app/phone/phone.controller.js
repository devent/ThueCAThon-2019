'use strict';

/**
 * ThueCatSelfServiceController
 */
angular.
  module('thueCatSelfServiceApp').controller('ThueCatSelfServiceController', 
    function ThueCatSelfServiceController($scope, $http, $window) {
  
  $scope.home = "This is the homepage";

  $window.fbAsyncInit = function() {
    FB.init({ 
      appId: '{your-app-id}',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
};

  
  $scope.getRequest = function() {
    console.log("I've been pressed!");
    $http.post("https://dev-cdb.thuecat.org/api/search/geocoord?latitude=50.936636&longitude=10.720244&radius=10000&api_key=z24f1FQAcnRml4tkmXca4lcFKF.koAsc4KCNWGO75nsLAeifNNkwgLF73zrnscb3dfnZdbk3mm.SPAl2DJFIoOz2evCHwflUF4")
        .then(
      function successCallback(response) {
        $scope.response = response;
        console.log($scope.response);
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };

    $scope.reset = function() {
        $scope.response = "";
    }
  
});

