'use strict';
var angular=require('angular');
require('angular-route');
var app=angular.module('mymovieapp',['ngRoute','angular.filter','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('mymovieapp').controller('RatingCtrl', function ($scope) {
  $scope.rate = 1;
  $scope.max = 5;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
  ];
});

require('./controller');

app.config(function($routeProvider)
{
  $routeProvider.when('/',{
    templateUrl:'views/home.html',
    controller:'MovieController'
  })
  .when('/moviemanage',{
    templateUrl:'views/moviemanage.html',
    controller:'MovieController'
  })
  .when('/theater',{
    templateUrl:'views/main.html',
    controller:'MainController'
  })
  .when('/moviemapping',{
    templateUrl:'views/moviemapping.html',
    controller:'MappingController'
  })
  .when('/removemapping',{
    templateUrl:'views/removemapping.html',
    controller:'MappingController',
})
.when('/seatselect',{
  templateUrl:'views/seatselect1.html',
  controller:'SelectSeatController',
})
.when('/payment',{
  templateUrl:'views/paymentpage.html',
  controller:'PaymentController',
})
.when('/bookingproceed',{
  templateUrl:'views/moviepage.html',
  controller:'MappingController',
})
.when('/main',{
  templateUrl:'views/adminlogin.html',
  controller:'MainController',
})
.when('/confirm',
{
  templateUrl:'views/confirmpage.html',
})
.when('/review',
{
  templateUrl:'views/reviews.html',
  controller:'ReviewController',
})
.when('/login',
{
  templateUrl:'views/adminlogin.html',
})
.when('/admin',
{
  templateUrl:'views/myadminhome.html',
  controller:'AdminController',
})
});

/*.when('/insert',{
  templateUrl:'views/insert.html',
  controller:'MainController'
  //controller:'InsertController'
});*/
