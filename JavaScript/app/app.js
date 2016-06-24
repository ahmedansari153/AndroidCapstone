"use strict";

/* exported MusicHistory */

let AndroidApp = angular.module("AndroidApp", ["ngRoute", "ui.grid", "ui.grid.resizeColumns", 'ui.grid.selection'])

/*
  Define a promise for any view that needs an authenticated user
  before it will resolve (see below)
 */
let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

/*
  Set up routes for Music History app
 */
AndroidApp.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/survey.html",
        controller: "PhoneCtrl"
        // resolve: { isAuth }
      }).
      when("/phone1", {
        templateUrl: "partials/phones.html",
        controller: "PhoneDtlCtrl"
        // resolve: { isAuth }
      }).
      when("/phone", {
        templateUrl: "partials/phones.html",
        controller: "PhoneDtlCtrl"
        // resolve: { isAuth }
      }).
      when("/phone2", {
        templateUrl: "partials/phones.html",
        controller: "PhoneDtlCtrl"
        // resolve: { isAuth }
      }).
      when("/phone3", {
        templateUrl: "partials/phones.html",
        controller: "PhoneDtlCtrl"
        // resolve: { isAuth }
      }).
      when("/selection", {
        templateUrl: "partials/selection.html",
        controller: "IndvidualPhnCtrl"
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);

/*
  When the application first loads, redirect the user to the login
  form if there is no authentication
 */
