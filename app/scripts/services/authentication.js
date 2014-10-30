'use strict';

angular.module('tokenBasedAuthenticationAngularjsApp')
  .service('Authentication', function Authentication() {

    var auth = {
        isAuthenticated: false,
        isAdmin: false
    }

    return auth;

  });
