'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {
	$scope.menu = {};
    MenuService.get('/data/menu.json').success(function(data) {
	  $scope.menu = data;
    $scope.meals = data.meals;
    $scope.type = data.meals[0].tags;
    $scope.price = data.meals.price;
    //console.log($scope.meals);
    for (var i = 0; i < $scope.meals.length; i++) {
      if ($scope.meals[i].tags.indexOf('#course:main_courses') > -1) {
        $scope.new = $scope.meals[i].tags.indexOf('#course:main_courses');
        //console.log($scope.new);
      }
      else {
      }
    }
    // $scope.main = data.meals[0].tags[0].replace(/#course:/g, '')
	});
  $scope.addToOrder = function(price) {
    $scope.cart.quantity += 1;
    $scope.cart.total += parseFloat(price);
    console.log('Price is', price)
    console.log($scope.cart.quantity)
  };
  }
])

  .controller('HeaderCtrl', function($scope) {
    $scope.cart = {
      quantity: 0,
      total: 0
    };
  })
