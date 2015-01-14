var calaverita = angular.module('calaverita', []);

//Fill with data
//TODO: Replace this with a http service?
calaverita.factory('Elements', function() {
  var Elements = {};

  Elements.colors = [
    { name: 'black', code: '#000000' },
    { name: 'white', code: '#FFFFFF' },
    { name: 'purple', code: '#8601AF' },
    { name: 'blue', code: '#0247FE' },
    { name: 'green', code: '#66B032' },
    { name: 'yellow', code: '#FEFE33' },
    { name: 'orange', code: '#FB9902' },
    { name: 'red', code: '#FE2712' }
  ];

  Elements.backgrounds = [
    { id: 1, name: 'Plano', src: 'assets/resources/background_sample.jpg' },
    { id: 2, name: 'Oficina', src: 'assets/resources/background_sample.jpg' },
    { id: 3, name: 'Playa', src: 'assets/resources/background_sample.jpg' },
    { id: 4, name: 'Volcan', src: 'assets/resources/background_sample.jpg' },
    { id: 5, name: 'CrowdInteractive', src: 'assets/resources/background_sample.jpg' },
    { id: 6, name: 'bg_6', src: 'assets/resources/background_sample.jpg' },
    { id: 7, name: 'bg_7', src: 'assets/resources/background_sample.jpg' },
    { id: 8, name: 'bg_8', src: 'assets/resources/background_sample.jpg' },
    { id: 9, name: 'bg_9', src: 'assets/resources/background_sample.jpg' },
    { id: 10, name: 'bg_10', src: 'assets/resources/background_sample.jpg' },
    { id: 11, name: 'bg_11', src: 'assets/resources/background_sample.jpg' },
    { id: 12, name: 'bg_12', src: 'assets/resources/background_sample.jpg' },
    { id: 13, name: 'bg_13', src: 'assets/resources/background_sample.jpg' },
    { id: 14, name: 'bg_14', src: 'assets/resources/background_sample.jpg' },
    { id: 15, name: 'bg_15', src: 'assets/resources/background_sample.jpg' },
    { id: 16, name: 'bg_16', src: 'assets/resources/background_sample.jpg' },
    { id: 17, name: 'bg_17', src: 'assets/resources/background_sample.jpg' },
    { id: 18, name: 'bg_18', src: 'assets/resources/background_sample.jpg' },
    { id: 19, name: 'bg_19', src: 'assets/resources/background_sample.jpg' },
    { id: 20, name: 'bg_20', src: 'assets/resources/background_sample.jpg' },
    { id: 21, name: 'bg_21', src: 'assets/resources/background_sample.jpg' },
    { id: 22, name: 'bg_22', src: 'assets/resources/background_sample.jpg' },
    { id: 23, name: 'bg_23', src: 'assets/resources/background_sample.jpg' },
    { id: 24, name: 'bg_24', src: 'assets/resources/background_sample.jpg' },
    { id: 25, name: 'bg_25', src: 'assets/resources/background_sample.jpg' }
  ];

  Elements.haircuts = [
    { id: 1, name: 'haircut_1', src: 'assets/resources/haircut_sample.jpg' },
    { id: 2, name: 'haircut_2', src: 'assets/resources/haircut_sample.jpg' },
    { id: 3, name: 'haircut_3', src: 'assets/resources/haircut_sample.jpg' },
    { id: 4, name: 'haircut_4', src: 'assets/resources/haircut_sample.jpg' },
    { id: 5, name: 'haircut_5', src: 'assets/resources/haircut_sample.jpg' },
    { id: 6, name: 'haircut_6', src: 'assets/resources/haircut_sample.jpg' },
    { id: 7, name: 'haircut_7', src: 'assets/resources/haircut_sample.jpg' },
    { id: 8, name: 'haircut_8', src: 'assets/resources/haircut_sample.jpg' },
    { id: 9, name: 'haircut_9', src: 'assets/resources/haircut_sample.jpg' },
    { id: 10, name: 'haircut_10', src: 'assets/resources/haircut_sample.jpg' },
    { id: 11, name: 'haircut_11', src: 'assets/resources/haircut_sample.jpg' },
    { id: 12, name: 'haircut_12', src: 'assets/resources/haircut_sample.jpg' },
    { id: 13, name: 'haircut_13', src: 'assets/resources/haircut_sample.jpg' },
    { id: 14, name: 'haircut_14', src: 'assets/resources/haircut_sample.jpg' },
    { id: 15, name: 'haircut_15', src: 'assets/resources/haircut_sample.jpg' },
    { id: 16, name: 'haircut_16', src: 'assets/resources/haircut_sample.jpg' },
    { id: 17, name: 'haircut_17', src: 'assets/resources/haircut_sample.jpg' },
    { id: 18, name: 'haircut_18', src: 'assets/resources/haircut_sample.jpg' },
    { id: 19, name: 'haircut_19', src: 'assets/resources/haircut_sample.jpg' },
    { id: 20, name: 'haircut_20', src: 'assets/resources/haircut_sample.jpg' },
    { id: 21, name: 'haircut_21', src: 'assets/resources/haircut_sample.jpg' },
    { id: 22, name: 'haircut_22', src: 'assets/resources/haircut_sample.jpg' },
    { id: 23, name: 'haircut_23', src: 'assets/resources/haircut_sample.jpg' },
    { id: 24, name: 'haircut_24', src: 'assets/resources/haircut_sample.jpg' },
    { id: 25, name: 'haircut_25', src: 'assets/resources/haircut_sample.jpg' }
  ];

  Elements.ornaments = [
    { id: 1, name: 'ornament_1', src: 'assets/resources/ornament_sample.jpg' },
    { id: 2, name: 'ornament_2', src: 'assets/resources/ornament_sample.jpg' },
    { id: 3, name: 'ornament_3', src: 'assets/resources/ornament_sample.jpg' },
    { id: 4, name: 'ornament_4', src: 'assets/resources/ornament_sample.jpg' },
    { id: 5, name: 'ornament_5', src: 'assets/resources/ornament_sample.jpg' },
    { id: 6, name: 'ornament_6', src: 'assets/resources/ornament_sample.jpg' },
    { id: 7, name: 'ornament_7', src: 'assets/resources/ornament_sample.jpg' },
    { id: 8, name: 'ornament_8', src: 'assets/resources/ornament_sample.jpg' },
    { id: 9, name: 'ornament_9', src: 'assets/resources/ornament_sample.jpg' },
    { id: 10, name: 'ornament_10', src: 'assets/resources/ornament_sample.jpg' },
    { id: 11, name: 'ornament_11', src: 'assets/resources/ornament_sample.jpg' },
    { id: 12, name: 'ornament_12', src: 'assets/resources/ornament_sample.jpg' },
    { id: 13, name: 'ornament_13', src: 'assets/resources/ornament_sample.jpg' },
    { id: 14, name: 'ornament_14', src: 'assets/resources/ornament_sample.jpg' },
    { id: 15, name: 'ornament_15', src: 'assets/resources/ornament_sample.jpg' },
    { id: 16, name: 'ornament_16', src: 'assets/resources/ornament_sample.jpg' },
    { id: 17, name: 'ornament_17', src: 'assets/resources/ornament_sample.jpg' },
    { id: 18, name: 'ornament_18', src: 'assets/resources/ornament_sample.jpg' },
    { id: 19, name: 'ornament_19', src: 'assets/resources/ornament_sample.jpg' },
    { id: 20, name: 'ornament_20', src: 'assets/resources/ornament_sample.jpg' },
    { id: 21, name: 'ornament_21', src: 'assets/resources/ornament_sample.jpg' },
    { id: 22, name: 'ornament_22', src: 'assets/resources/ornament_sample.jpg' },
    { id: 23, name: 'ornament_23', src: 'assets/resources/ornament_sample.jpg' },
    { id: 24, name: 'ornament_24', src: 'assets/resources/ornament_sample.jpg' },
    { id: 25, name: 'ornament_25', src: 'assets/resources/ornament_sample.jpg' }
  ];

  return Elements;
});

calaverita.controller('ElementsCtrl', function($scope, Elements) {
  $scope.elements = Elements;
  $scope.editable = false;
  $scope.selectedElement = 0;
  $scope.showColor = false;
  $scope.myCalaverita = {
    background: 1,
    hair: 1,
    ornaments: []
  };

  //Click edit button
  $scope.toggleEdit = function() {
    $scope.editable = !this.editable;
  };

  //Click element button
  $scope.selectElement = function(numElement) {
    $scope.selectedElement = numElement;
    $scope.showColor = false;
  };

  //Click item button
  $scope.selectItem = function(color) {
    $scope.showColor = color;
  };

  //Click color button
  //Facebook button
  //Save button
});