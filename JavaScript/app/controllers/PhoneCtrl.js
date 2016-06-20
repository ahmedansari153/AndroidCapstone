"use strict";

AndroidApp.controller("PhoneCtrl", [
 "$http",
 "$scope",
 "$location",

  function ($http, $scope, $location) {
    
    $scope.phone_list = [];
    $scope.phone = [];

    $http 
      .get('http://localhost:61754/api/Home')
      .success(inv => $scope.phone_list = inv);

    // Title Filter Get
    var selectedVal = "";
    var selected = $('input[name=cpu]:checked', '#radioForm');

    $("form").submit(function() {
      if (selected.length > 0) {
        selectedVal = selected.val();
        console.log(selected.val(), "selected value")
      }
    })

    $("form").submit(function() {
      console.log("This is submitting")
    if( selectedVal === "1") {
      $http 
        .get(`http://localhost:61754/api/Home/1`)
        .success(inv => $scope.phone = inv);
      }
    if( selectedVal === "2") {
      $http 
        .get(`http://localhost:61754/api/Home/2`)
        .success(inv => $scope.phone = inv);
      }
    if( selectedVal === "3") {
      $http 
        .get(`http://localhost:61754/api/Home/3`)
        .success(inv => $scope.phone = inv);
      }
    })
      
  }
]);