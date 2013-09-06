'use strict';

/* App Module */

var myApp = angular.module('angulargap', ['phonegapServices']);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/index.html', {
            templateUrl: 'phone_list.html',
            controller: 'PhoneListCtrl'
        }).when('/phones/:phoneId', {
            templateUrl: 'index.html',
            controller: 'MainCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
    }
]);
