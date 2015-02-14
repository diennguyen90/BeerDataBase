/**
 * Created by diennguyen on 2/13/15.
 */
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'firebase']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'MainController'
        })

        // route for the about page
        .when('/login', {
            templateUrl : 'login.html',
            controller  : 'LoginController'
        })

        // route for the contact page
        .when('/register', {
            templateUrl : 'register.html',
            controller  : 'RegController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('MainController', function($scope, $firebase) {
    //creates a reference to Firebase
    var ref = new Firebase("https://dienspokedex.firebaseIO.com");

    var sync = $firebase(ref);
    var obj = sync.$asObject();
    //
    $scope.myList = sync.$asArray();
    $scope.addBeer=function(){
    	//adds to your firebase
    	$scope.myList.$add($scope.beer);
    	$scope.beer= {};
    };
    $scope.removeBeer=function(){
    	$scope.myList.$remove($scope.beer);
    }


});

scotchApp.controller('LoginController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('RegisterController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});