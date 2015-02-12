var app = angular.module('myApp', ['firebase']);

app.controller('MainController', function($scope, $firebase){
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

