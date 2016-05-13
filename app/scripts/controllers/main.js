'use strict';

/**
 * @ngdoc function
 * @name joseQApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joseQApp
 */
angular.module('joseQApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.class= 'OnDotCom';
      
  });
