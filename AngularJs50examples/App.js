angular.module('nameApp',['ngRoute'])

.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'country-list.html',
            controller: 'CountryCtrl'
          }).
          when('/:countryID', {
            templateUrl: 'country-details.html',
            controller: 'CountryDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
 })

.factory('countries',function($http){

  return { 
      list: function(callback){
        $http({
          method: 'GET',
          url: 'countries.json',
          cache : true
        }).success(callback);
      },
      find : function(id, callback){
        $http({
          method: 'GET',
          url: 'countries_' + id + '.json',
          cache : true
        }).success(callback);
      }
  };
})




.controller('MainCtrl', function($scope){
	$scope.firstname='john';
	$scope.lastname='deo';
	$scope.namearray=['andy', 'divya','john'];

	$scope.addName = function(){

		$scope.namearray.push($scope.enterName);
		//push the "enterName" in to namearray
		$scope.enterName = '';
	}
	$scope.removeName = function(name){
		$scope.namearray.splice($scope.namearray.indexOf(name),1);
	}
})


.controller('CountryCtrl', function ($scope,$http, countries){
        countries.list(function(countries) {
          $scope.JSONresponse = countries;
        });
      })

.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
        countries.find($routeParams.countryID, function(country) {
          $scope.JSONobject = country[0];
          console.log(country);
        });
      })

.controller('ContactListCtrl',function($scope){
  person1 = {
        name: 'tim1',
        email: 'tim1@paypal.com',
        number: '1111111111'
  };
  person2 = {
        name: 'tim2',
        email: 'tim2@paypal.com',
        number: '2222222222'
  };
  person3 = {
        name: 'tim3',
        email: 'tim3@paypal.com',
        number: '3333333333'
  };

  var contactlist = [person1,person2,person3];
  $scope.contactlist = contactlist;
})