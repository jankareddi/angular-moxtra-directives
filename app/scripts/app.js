'use strict';

/**
 * @ngdoc overview
 * @name moxtraDirectivesApp
 * @description
 * # moxtraDirectivesApp
 *
 * Main module of the application.
 */
angular
  .module('moxtraDirectivesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
