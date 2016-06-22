"use strict"

AndroidApp.service('phoneService', function () {
    let phone = [];
    var addPhone = function(newObj) {
      phone.push(newObj);
    };

    var getPhone = function() {
      return phone;
    }

    return {
      addPhone: addPhone,
      getPhone: getPhone
    }
});