(function () {
  'use strict';
  angular
      .module('chipsDemo', ['ngMaterial', 'ngMessages'])
      .controller('BasicDemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    var self = this;

    self.readonly = false;
    self.removable = true;

    // Lists of fruit names and Vegetable objects
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
    self.editableFruitNames = angular.copy(self.fruitNames);

    self.tags = [];
    self.vegObjs = [
      {
        'name' : 'Broccoli',
        'type' : 'Brassica'
      },
      {
        'name' : 'Cabbage',
        'type' : 'Brassica'
      },
      {
        'name' : 'Carrot',
        'type' : 'Umbelliferous'
      }
    ];

    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };
  }
})();
