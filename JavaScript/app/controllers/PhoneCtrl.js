"use strict";

AndroidPicker.controller("PhoneCtrl", [
 "$http",
 "$scope",
 "$location",
 

  function ($http, $scope, $location) {
    
    $scope.phone_list = [];
    $scope.phone = [];

    $http 
      .get('http://localhost:61927/api/Home')
      .success(inv => $scope.phone_list = inv);
      
    $scope.details = function (id) {
      $location.path(`/phone/${id}`);
    }

    // Title Filter Get
    $("#title_filter").on('keyup', function() {
      var searchString = $("#title_filter").val();
      console.log('searchString', searchString);

      $http 
        .get(`http://localhost:61927/api/Home?phoneName=${searchString}`)
        .success(inv => $scope.song_list = inv);

    })  
  }
]);