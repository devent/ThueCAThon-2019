'use strict';

/**
 * Phone Service
 */
angular.module('phonecatApp').
  factory('Phone', 
      function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
          
          
);
