'use strict';

/* Controllers */

myApp
.controller('PhoneListCtrl', function ($rootScope, $scope, $http) {
    //Aktuelle Seite
    $scope.currentPage = 0;
    //Anzahl der angezeigten Elemente 
    $scope.pageSize = 5;
    $scope.numberOfPages = 0;
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
        // Anzahl der Seiten
        $scope.numberOfPages = function() {
            return Math.ceil($scope.phones.length / $scope.pageSize);
        }
    })    
    $scope.orderProp = 'age';
    $scope.newPage = function(id) {
        $http.get('phones/' + id + '.json').success(function(data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });

    }
})
.controller('MainCtrl', function ($rootScope, $scope, $http, NotificationService) {
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
        $scope.showAlert = function () {
            navigator.notification.vibrate(2000);
            NotificationService.alert("You have bought a phone.", "Buy", "Ok", function () {
                $scope.message = "You have bought a phone.";
            });
        }; 
    }).filter('startFrom', function() {
    return function(input, start) {
        start =+ start; //parse to int
        return input.slice(start);
    }
});