// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('rma', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider','$ionicConfigProvider', function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $stateProvider

        .state('intro', {
            url : '/intro',
            templateUrl : 'view/intro.html',
            controller : 'introCtrl',
            cache: false
        })

        .state('login', {
            url : '/login',
            templateUrl : 'view/login.html',
            controller : 'loginCtrl',
            cache: false
        })
        .state('dashboard', {
            url : '/dashboard',
            templateUrl : 'view/dashboard.html',
            controller : 'dashboardCtrl',
            cache: false
        })

        $urlRouterProvider.otherwise(function ($injector, $location) {
            return '/login'
        });

}])


angular.module('rma').controller('headerCtrl',['$scope','$state','$ionicHistory','$ionicModal',function($scope,$state,$ionicHistory,$ionicModal){
    $scope.goLogin=function(){
        $state.go('tab.login');
    }
}]);