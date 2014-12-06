'use strict';

/**
 * @ngdoc function
 * @name moxtraDirectivesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moxtraDirectivesApp
 */
angular.module('moxtraDirectivesApp')
  .controller('MainCtrl', function ($scope, $config) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sessionInfo = {
      id : 'session-id',
      clientId: $config.clientId,
      clientSecret: $config.clientSecret,
      userId: 'unique-user-id', // ideally this comes from the user context
      firstName: 'John', // ideally this comes from the user context
      lastName: 'Smith' // ideally this comes from the user context
    };
  });
