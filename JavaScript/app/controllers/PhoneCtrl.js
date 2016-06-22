"use strict";

AndroidApp.controller("PhoneCtrl", [
 "$http",
 "$scope",
 "$location",

  function ($http, $scope, $location) {
    
    $scope.go = function ( path ) {
     $location.path( path );
    };
    $scope.phone_list = []; 
    $("a").on("click", function() {
        if(document.getElementById('cpuid1').checked) {
            document.getElementById('myLink').href = "#/phone1";
            console.log("phone1")

        }
        else if(document.getElementById('cpuid2').checked) {
            document.getElementById('myLink').href = "#/phone2";
            console.log("phone2")
        }
        else if(document.getElementById('cpuid3').checked) {
            document.getElementById('myLink').href = "#/phone3";
            console.log("phone3")
        }
    })

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
  }
]);