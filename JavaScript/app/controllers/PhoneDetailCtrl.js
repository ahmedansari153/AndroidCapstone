"use strict"

AndroidApp.controller("PhoneDtlCtrl", [
 "$http",
 "$rootScope",
 "$scope",
 "$location", 
 

  function ($http, $rootScope, $scope, $location, phoneService) {

    $scope.go = function ( path ) {
      $location.path( path );
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
    let phoneSelection = $scope.myGridApi.selection.getSelectedRows();
    $rootScope.PhoneSelection = phoneSelection
    console.log("This is working", $rootScope.PhoneSelection);
    return $rootScope.PhoneSelection
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