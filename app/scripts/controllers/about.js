'use strict';

/**
 * @ngdoc function
 * @name meApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meApp
 */
angular.module('meApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
