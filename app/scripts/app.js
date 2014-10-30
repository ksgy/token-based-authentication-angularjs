'use strict';

/**
 * @ngdoc overview
 * @name tokenBasedAuthenticationAngularjsApp
 * @description
 * # tokenBasedAuthenticationAngularjsApp
 *
 * Main module of the application.
 */
angular.module('tokenBasedAuthenticationAngularjsApp', [
  'ngResource',
  'ngRoute',
  'ngSanitize'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      access: { requiredAuthentication: true }
    })
    .otherwise({
      redirectTo: '/'
    });
})

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
})

// CROSS DOMAIN
// .config(['$sceDelegateProvider', function($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist([
//         'self',
//         'http://localhost:*/**'
//     ]);
// }])

.run(function($rootScope, $location, $window, Authentication) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        //redirect only if both isAuthenticated is false and no token is set
        if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication
            && !Authentication.isAuthenticated && !$window.sessionStorage.token) {

            $location.path("/");
        }
    });
});
