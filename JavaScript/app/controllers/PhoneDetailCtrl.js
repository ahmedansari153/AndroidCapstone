"use strict"

AndroidApp.controller("PhoneDtlCtrl", [
 "$http",
 "$scope",
 "$location", 

  function ($http, $scope, $location, phoneService) {

    $scope.callToAddToPhone = function(currObj){
        phoneService.addProduct(currObj);
    };

    $scope.gridOptions = {
      enableSorting: true,
      enableRowSelection: true, 
      enableRowHeaderSelection: false,

       columnDefs: [
        { field: 'PhoneId', visible: false },
        { field: 'Carrier' },
        { field: 'Name' },
        { field: 'AndroidVersion' },
        { field: 'DisplayResolution' },
        { field: 'ScreenSize' },
        { field: 'BatteryMah' },
        { field: 'WaterProof' },
        { field: 'Price' },
        { field: 'WirelessCharging' },
      ]
    }
    $scope.gridOptions.multiSelect = false;
    $scope.gridOptions.modifierKeysToMultiSelect = false;
    $scope.gridOptions.noUnselect = true;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
    $scope.myGridApi = gridApi;
      $scope.toggleRowSelection = function() {
    $scope.gridApi.selection.clearSelectedRows();
    $scope.gridOptions.enableRowSelection = !$scope.gridOptions.enableRowSelection;
    $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
  };
  };

  $scope.selectRow = function(){
    $scope.myGridApi.selection.getSelectedRows();
    console.log("This is working", $scope.myGridApi.selection.getSelectedRows());
};

    $("document").ready(function() {
    $scope.phone_list = [];
    if(window.location.href == "http://localhost:8080/#/phone1") {
      $http 
        .get(`http://localhost:61754/api/Home/1`)
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
      }
    else if(window.location.href == "http://localhost:8080/#/phone2") {
      $http 
        .get(`http://localhost:61754/api/Home/2`)
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
      }
    else if(window.location.href == "http://localhost:8080/#/phone3") {
      $http 
        .get(`http://localhost:61754/api/Home/3`)
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
      }
    })
    }
]);