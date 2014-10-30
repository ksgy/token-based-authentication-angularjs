'use strict';

angular.module('tokenBasedAuthenticationAngularjsApp')
  .service('User', function User($http) {

    return {
        signIn: function(username, password) {
            return $http.post(
                        'http://localhost:3001/users/signin',
                        {username: username, password: password}
                    );
        }


    }

  });
