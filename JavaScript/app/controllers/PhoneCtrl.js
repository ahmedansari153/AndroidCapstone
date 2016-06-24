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
            var FirstQuestionAnswer = $("#cpuid1").val()
        }
        else if(document.getElementById('cpuid2').checked) {
            var FirstQuestionAnswer = $("#cpuid2").val()
        }
        else if(document.getElementById('cpuid3').checked) {
            var FirstQuestionAnswer = $("#cpuid3").val() 
        }
        if(document.getElementById('cpuid4').checked) {
            var SecondQuestionAnswer = $("#cpuid4").val()
        }
        else if(document.getElementById('cpuid5').checked) {
            var SecondQuestionAnswer = $("#cpuid5").val()
        }
        else if(document.getElementById('cpuid6').checked) {
            var SecondQuestionAnswer = $("#cpuid6").val() 
        }
        if(document.getElementById('cpuid7').checked) {
            var ThirdQuestionAnswer = $("#cpuid7").val()
        }
        else if(document.getElementById('cpuid8').checked) {
            var ThirdQuestionAnswer = $("#cpuid8").val()
        }
        else if(document.getElementById('cpuid9').checked) {
            var ThirdQuestionAnswer = $("#cpuid9").val() 
        }
        let Total = parseFloat(FirstQuestionAnswer) + parseFloat(SecondQuestionAnswer) + parseFloat(ThirdQuestionAnswer)
        if(Total >= 3){
          document.getElementById('myLink').href = "#/phone1";
        }
        if(Total >= 10){
          document.getElementById('myLink').href = "#/phone2";
        }
        if(Total >= 20){
          document.getElementById('myLink').href = "#/phone3";
        }
        console.log(FirstQuestionAnswer, "FirstQuestionAnswer")
        console.log(SecondQuestionAnswer, "SecondQuestionAnswer")
        console.log(ThirdQuestionAnswer, "ThirdQuestionAnswer")
        console.log(Total, "Total")
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