'use strict';

/**
 * @ngdoc function
 * @name moxtraDirectivesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moxtraDirectivesApp
 */
angular.module('moxtraDirectivesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
