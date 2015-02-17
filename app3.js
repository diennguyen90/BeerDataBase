var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	//route for home
	.when('/', {
		templateUrl : 'home.html',
		controller : 'MainController'
	});
	//route for login
	//.when('/login', {
	//	templateUrl : 'login.html',
	//	controller : 'LoginController'
	//})
	////route for register
	//.when('/register', {
	//	templateUrl : 'register.html',
	//	controller : 'RegController'
	//});

});



app.controller('MainController', function($scope, $firebase){
		//creates a reference to Firebase
	//var ref = new Firebase("https://dienspokedex.firebaseIO.com");
    //
	//var sync = $firebase(ref);
	//var obj = sync.$asObject();
	////
	//$scope.myList = sync.$asArray();
	//$scope.addBeer=function(){
	//	//adds to your firebase
	//	$scope.myList.$add($scope.beer);
	//	$scope.beer= {};
	//};
	//$scope.removeBeer=function(){
	//	$scope.myList.$remove($scope.beer);
	//}
	//

});

app.controller('LoginController', function($scope){
	$scope.message('hello this is login')
});

app.controller('RegController', function($scope){

});
