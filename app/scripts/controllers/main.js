'use strict';

/**
 * @ngdoc function
 * @name tokenBasedAuthenticationAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tokenBasedAuthenticationAngularjsApp
 */
angular.module('tokenBasedAuthenticationAngularjsApp')
  .controller('MainCtrl', function ($scope, Authentication, User, $location, $window) {


        $scope.signIn = function signIn(username, password) {

            if (username != null && password != null) {

                User.signIn(username, password).success(function(data) {

                    if (data.success) {

                        Authentication.isAuthenticated = true;
                        $window.sessionStorage.token = data.token;
                        $location.path("/about");

                    }else{
                        $location.path("/");
                    }

                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });

            }
        };


  });
