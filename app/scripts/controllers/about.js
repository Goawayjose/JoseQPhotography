'use strict';

/**
 * @ngdoc function
 * @name joseQApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the joseQApp
 */
angular.module('joseQApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
