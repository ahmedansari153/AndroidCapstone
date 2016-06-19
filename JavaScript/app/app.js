"use strict";

/* exported AndroidPicker */

let AndroidPicker = angular.module("AndroidApp", ["ngRoute"])

/*
  Set up routes for Music History app
 */
AndroidPicker.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "#/survey.html",
        controller: "PhoneCtrl"
        // resolve: { isAuth }
      })
      otherwise({
        redirectTo: "/"
      });
  }]);

/*
  When the application first loads, redirect the user to the login
  form if there is no authentication
 */