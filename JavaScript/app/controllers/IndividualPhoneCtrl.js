"use strict"

AndroidApp.controller("IndvidualPhnCtrl", [
 "$rootScope",
 "$scope",
 "$location", 

  function ($rootScope, $scope, $location) {

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
        { field: 'ImageUrl', visible: false },
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
	  $scope.gridOptions.data = $rootScope.PhoneSelection;
  }
])