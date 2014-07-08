'use strict';

/**
 * @ngdoc function
 * @name meApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meApp
 */
angular.module('meApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
